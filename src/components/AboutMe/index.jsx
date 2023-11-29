import './style.css';
import aboutmephoto from './../../assets/aboutme-photo.png';
import { useEffect, useState } from 'react';


export const AboutMe = () => {
    const [age, setAge] = useState();

    var currentDate = new Date();
    var birth = {dia: 16, mes: 7, ano: 2003}

    useEffect(() => {
        if(currentDate.getMonth() + 1 < birth['mes']) {
            setAge(currentDate.getFullYear() - birth['ano'] - 1);
        } else {
            setAge(currentDate.getFullYear() - birth['ano']);
        }
    }, [])

    

    return (
        <div className="container">
            <section className='aboutme'>
                <div className='aboutme-photo-div'>
                    <img className='aboutme-photo-img' src={aboutmephoto} alt="Appa from Avatar: The Last Airbender" />
                </div>
                
                <div className='aboutme-info'>
                    <p>First of all, thank you for visiting my portfolio, I hope you liked <span className='pl-1'>:)</span></p>
                    <p>My full name is <b>Dyeizon Procopiuk da Silva</b>, and I am {age} years old. As you may notice, I am not fluent in English, I am from Brazil, so I speak Portuguese.</p>
                    <p>About my passions, I really like spending my free time studying Tarology, or playing League of Legends with some friends.</p>
                    
                    <div className='aboutme-buttons mt-4'>
                        <button type="button" class="social-media-button text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><a target="_blank" rel="noreferrer" href="https://www.github.com/Dyeizon">GitHub</a></button>
                        <button type="button" class="social-media-button text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/dyeizon-procopiuk-da-silva-2337bb145/">Linkedin</a></button>
                    </div>
                </div>
            </section>
        </div>
    );
}