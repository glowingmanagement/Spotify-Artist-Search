import { Request, Response } from "express";
import axios, { AxiosResponse } from "axios";

const getAccessToken = async (): Promise<string> => {
  const clientId: string | undefined = process.env.CLIENT_ID;
  const clientSecret: string | undefined = process.env.CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error(
      "Client ID or Client Secret is missing in environment variables."
    );
  }

  const url: string = `https://accounts.spotify.com/api/token`;
  const response: AxiosResponse = await axios.post(
    url,
    "grant_type=client_credentials",
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${Buffer.from(
          `${clientId}:${clientSecret}`
        ).toString("base64")}`,
      },
    }
  );
  return response.data.access_token;
};

export const getArtistData = async (req: Request, res: Response) => {
  const artistName: string | undefined = req.query.name as string | undefined;
  const accessToken: string = await getAccessToken();
  const url: string = `https://api.spotify.com/v1/search?q=${artistName}&type=artist&limit=5`;
  const response: AxiosResponse = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.status(200).json(response.data);
};
