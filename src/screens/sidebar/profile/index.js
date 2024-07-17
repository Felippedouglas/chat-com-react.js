import { IoIosArrowBack } from 'react-icons/io';
import * as C from './styles.js';
import { useEffect } from 'react';
import { MdPrivacyTip } from 'react-icons/md';

export default function Profile( { setScreen, user } ) {

    useEffect(()=>{
        console.log(user)
    }, [ user ])


    return(
        <C.Container>
            <C.Header>
                <C.Close onClick={()=>setScreen('chats')}><IoIosArrowBack></IoIosArrowBack></C.Close>
                <C.Title>Conta</C.Title>
            </C.Header>
            <C.User>
                <C.Image src={user?.photoURL} alt='user photo'/>
                <C.Name>{user?.displayName}</C.Name>
                <C.Email>{user?.email}</C.Email>
            </C.User>
            <C.Settings>
                <section>
                    <h3 className='title'>Configurações</h3>
                    <button className='option'><MdPrivacyTip></MdPrivacyTip> Geral</button>
                    <button className='option'><MdPrivacyTip></MdPrivacyTip> Privacidade</button>
                    <button className='option'><MdPrivacyTip></MdPrivacyTip> Sobre</button>
                </section>
                <section>
                    <h3 className='title'>Configurações</h3>
                    <button className='option'><MdPrivacyTip></MdPrivacyTip> Geral</button>
                    <button className='option'><MdPrivacyTip></MdPrivacyTip> Privacidade</button>
                    <button className='option'><MdPrivacyTip></MdPrivacyTip> Sobre</button>
                </section>
                <section>
                    <h3 className='title'>Configurações</h3>
                    <button className='option'><MdPrivacyTip></MdPrivacyTip> Geral</button>
                    <button className='option'><MdPrivacyTip></MdPrivacyTip> Privacidade</button>
                    <button className='option'><MdPrivacyTip></MdPrivacyTip> Sobre</button>
                </section>
            </C.Settings>
        </C.Container>
    )
}