import React, { useRef, useState } from 'react'
import HeroBanner from "../../assets/banners/Hero banner.png"
import BgBloc2 from "../../assets/banners/bg-bloc2.png"
import BgMap from "../../assets/images/map.png"
import { Editor, EditorState } from 'draft-js';

import Case1 from "../../assets/images/case1.png"
import { ReactComponent as OpenIcon } from "../../assets/icons/icon_btn_case.svg"
import { ReactComponent as MapPin } from "../../assets/icons/MapPin.svg"

import "loki-editor/dist/TextEditor.css";
import './style.scss'
import Calendar from '../../components/Calendar'
import Section5 from './section5';
import ExporerSection from './explorer';

const titreMap = [{
    title: "Case sous-titre",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. dfgdsfgdfgsdg dfs gdfsg dfs g "
},
{
    title: "Case sous-titre",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. dfgdsfgdfgsdg dfs gdfsg dfs g "
},
{
    title: "Case sous-titre",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. dfgdsfgdfgsdg dfs gdfsg dfs g "
},
{
    title: "Case sous-titre",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. dfgdsfgdfgsdg dfs gdfsg dfs g "
},
{
    title: "Case sous-titre",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. dfgdsfgdfgsdg dfs gdfsg dfs g "
},
{
    title: "Case sous-titre",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. dfgdsfgdfgsdg dfs gdfsg dfs g "
},
{
    title: "Case sous-titre",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. dfgdsfgdfgsdg dfs gdfsg dfs g "
},
{
    title: "Case sous-titre",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. dfgdsfgdfgsdg dfs gdfsg dfs g "
},

]

function HomePage() {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [isPinVisible, setIsPinVisible] = useState(false);
    const [pinPosition, setPinPosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 });
    const imageRef = useRef<HTMLImageElement>(null);


    const handleImageClick = (event: React.MouseEvent<HTMLImageElement>) => {
        if (imageRef.current) {
            const imageRect = imageRef.current.getBoundingClientRect();
            const x = event.clientX;
            const y = event.clientY;
            setPinPosition({ x, y });
            setIsPinVisible(true);
        }
    };


    const handleOutsideClick = (event: MouseEvent) => {
        if (imageRef.current && !imageRef.current.contains(event.target as Node)) {
            setIsPinVisible(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);
    return (
        <div className='w-full  home-page'>
            <img src={HeroBanner} alt="" />

            <div className='section-1 py-10 max-w-[1240px] m-auto'>
                <div className="relative flex py-5 items-center">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="flex-shrink mx-4 text-gray-400 text-[#F2542D] font-[600px] text-[52px]">Titre Bloc 1</span>
                    <div className="flex-grow border-t border-gray-400"></div>
                </div>

                <p className='text-center'>Sous-titre Bloc 1</p>


                <div className='flex gap-[24px] pt-[55px]'>
                    <div className='case-1 flex flex-col gap-[20px]'>
                        <img src={Case1} alt='case1' />
                        <span className='case-label'>Case title</span>
                        <h6 className='case-title'>
                            Case sous-titre
                        </h6>
                        <p className='case-content'>
                            Chaque sentier vous conduit à des panoramas époustouflants, chaque instant devient une aventure, chaque rencontre vous promet un so uvenir marquant. Avec MITIK, le tourisme d’aventure allie nature brute et confort raffiné à toutes les saisons. Randonnée, canoë, observation de la faune, rencontres culturelles, exploration en montagne, chaque escapade est une immersion inoubliable dans les grands espaces canadiens.
                        </p>
                        <button className='case-btn'>
                            Forfait 1 <OpenIcon />
                        </button>
                    </div>
                    <div className='case-1 flex flex-col gap-[20px] mt-[-30px]'>
                        <img src={Case1} alt='case1' />
                        <span className='case-label'>Case title</span>
                        <h6 className='case-title'>
                            Case sous-titre
                        </h6>
                        <p className='case-content'>
                            Chaque sentier vous conduit à des panoramas époustouflants, chaque instant devient une aventure, chaque rencontre vous promet un so uvenir marquant. Avec MITIK, le tourisme d’aventure allie nature brute et confort raffiné à toutes les saisons. Randonnée, canoë, observation de la faune, rencontres culturelles, exploration en montagne, chaque escapade est une immersion inoubliable dans les grands espaces canadiens.
                        </p>
                        <button className='case-btn'>
                            Forfait 1 <OpenIcon />
                        </button>
                    </div>
                    <div className='case-1 flex flex-col gap-[20px]'>
                        <img src={Case1} alt='case1' />
                        <span className='case-label'>Case title</span>
                        <h6 className='case-title'>
                            Case sous-titre
                        </h6>
                        <p className='case-content'>
                            Chaque sentier vous conduit à des panoramas époustouflants, chaque instant devient une aventure, chaque rencontre vous promet un so uvenir marquant. Avec MITIK, le tourisme d’aventure allie nature brute et confort raffiné à toutes les saisons. Randonnée, canoë, observation de la faune, rencontres culturelles, exploration en montagne, chaque escapade est une immersion inoubliable dans les grands espaces canadiens.
                        </p>
                        <button className='case-btn'>
                            Forfait 1 <OpenIcon />
                        </button>
                    </div>

                </div>

            </div>

            <div className='section-2 relative pb-20'>
                <div className='map-container'>
                    <div className='map-container--header  max-w-[1240px] m-auto'>
                        <div className="relative flex py-5 items-center">
                            <div className="flex-grow border-t border-gray-400"></div>
                            <span className="flex-shrink mx-4 text-gray-400 text-[#F2542D] font-[600px] text-[52px]">Titre Bloc 2</span>
                            <div className="flex-grow border-t border-gray-400"></div>
                        </div>

                    </div>
                    <div className=' flex justify-center w-full rounded-lg overflow-hidden'>
                        <img
                            ref={imageRef}
                            alt="map"
                            onClick={handleImageClick}
                            src={BgMap} className='rounded-lg' />
                        {isPinVisible && (
                            <div
                                className=' absolute'
                                style={{
                                    left: `${pinPosition.x}px`,
                                    top: `${pinPosition.y}px`,
                                }}
                            >
                                <MapPin />
                            </div>
                        )}
                    </div>

                </div>
            </div>


            <div className='section-3'>
                <div className='map-container--header  max-w-[1240px] m-auto'>
                    <div className="relative flex py-5 items-center">
                        <div className="flex-grow border-t border-gray-400"></div>
                        <span className="flex-shrink mx-4 text-gray-400 text-[#F2542D] font-[600px] text-[52px]">NOS ACTIVITÉS</span>
                        <div className="flex-grow border-t border-gray-400"></div>
                    </div>
                </div>
                <Calendar />
                <div className='form-input'>
                    <form>
                        <div className='input-label'>
                            <label htmlFor="nom">Nom:</label>
                            <input name='nom' type="text" placeholder='Entrez votre nom' />
                        </div>
                        <div className='input-label'>
                            <label htmlFor="email">Email:</label>
                            <input name='email' type="text" placeholder='Entrez votre e-mail' />
                        </div>
                        <div className='input-label'>
                            <label htmlFor="message">Message:</label>
                            <Editor editorState={editorState} onChange={setEditorState} />
                        </div>

                        <div className='input-label'>
                            <label htmlFor="fichier">Fichier:</label>
                            <input type="file" />
                        </div>
                        <div className='w-full flex items-center justify-end gap-5'>
                            <button className='btn_secondary'>
                                Clear All
                            </button>
                            <button className='btn_main'>
                                Envoyer
                            </button>
                        </div>
                    </form>
                </div>
            </div>


            <div className='section-4 py-20  max-w-[1240px] m-auto'>
                <div className="section-4--header flex justify-between items-center m-auto">
                    <span className='section-header'>TITRE</span>
                    <p>En Savoir Plus</p>

                </div>

                <div className='flex overflow-show gap-7'>

                    {titreMap.map((x) => <div className='titre-case gap-3 flex flex-col'>
                        <img src={Case1} alt="" />
                        <span className='titre-case--label'>Case title</span>
                        <h6 className='titre-case--title'>{x.title}e</h6>
                        <div className=' pl-2 '>
                            <p className='titre-case--content'>{x.content}</p>
                        </div>
                    </div>)}
                </div>
            </div>


            <Section5 />
            <ExporerSection/>
        </div>
    )
}

export default HomePage
