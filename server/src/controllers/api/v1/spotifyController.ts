import express, { Request, Response } from "express";
import axios from "axios";

const getAccessToken = async () => {
    const clientId = process.env.CLIENT_ID;
    const clientSecret = process.env.CLIENT_SECRET;
    const url = `https://accounts.spotify.com/api/token`;
    const response = await axios.post(
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
    const artistName = req.query.name;
    const accessToken = await getAccessToken();
    const url = `https://api.spotify.com/v1/search?q=${artistName}&type=artist`;
    const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.status(200).json(response.data);
}