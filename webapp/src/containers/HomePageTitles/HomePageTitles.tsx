import './HomePageTitles.css';


const HomePageTitles = () => {
    const title: string = "Transforming the future of music promotion";
    const subtitle: string = "YOU HAVE TO BE SEEN TO BE HURD";
    return (
        <div className='titleContainer'>
            <h2 className='subtitle'>{subtitle}</h2>
            <h1 className='title'>{title}</h1>
        </div>
  );
}

export default HomePageTitles;