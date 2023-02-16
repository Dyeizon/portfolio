import './style.css';
import defaultimage from '../../assets/project-image-default.png';

export const Card = (props) => {
    if(props.soon) {
        return(
            <div className="card max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={defaultimage} alt={`Project coming soon`}/>
                <p className="text-2xl text-center pt-4">{props.title}</p>
                <div className="flex justify-center py-4">
                    <button className="bg-red-500 cursor-not-allowed text-white font-bold py-2 px-4 border-b-4 border-red-700 rounded mr-4">Website</button>
                    <button className="bg-red-500 cursor-not-allowed text-white font-bold py-2 px-4 border-b-4 border-red-700 rounded">Repository</button>
                </div>
            </div>
        );
    }

    else {
        return (
            <div className="card max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={props.src} alt={`The ${props.title} project`}/>
                <p className="text-2xl text-center pt-4">{props.title}</p>
                <div className="flex justify-center py-4">
                    <a href={props.siteHref} target="_blank" rel="noreferrer"><button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mr-4">Website</button></a>
                    <a href={props.githubHref} target="_blank" rel="noreferrer"><button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Repository</button></a>
                </div>
            </div>
        );
    }
    
}