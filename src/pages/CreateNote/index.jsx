import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Header} from '../../components/Header';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';

import { api } from '../../services/api';

import { Link } from 'react-router-dom';

import { Container, Form} from './styles'


export function CreateNote(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate();

    function handleAddLink(){
        setLinks( prevState => [...prevState, newLink]);
        setNewLink("");
    }

    function handleRemoveLink(linkDeleted){
        setLinks( prevState => prevState.filter(link => link !== linkDeleted));
    }

    function handleAddTag(){
        setTags( prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(tagDeleted){
        setTags( prevState => prevState.filter(tag => tag !== tagDeleted));
    }

    async function handleNewNote(){
        if(!title){
            return alert('Por favor, insira um title para a nota.');
        }

        if(newTag){
            return alert('Você deixou uma tag para adicionar, mas não a adicionou.');
        }

        if(newLink){
            return alert('Você deixou uma link para adicionar, mas não a adicionou.');
        }

        if(!links && !tags){
            return alert('Insira pelo menos um link e uma tag para cadastrar nota');
        }
            await api.post("/notes", {
                title,
                description,
                tags,
                links
            });
    
            alert("Nota criada com sucesso!");
            navigate("/");
            
        
    }
    
    return (
        <Container>
             <Header />

             <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>

                        <Link to="/">
                            voltar
                        </Link>
                    </header>

                    <Input 
                        placeholder="Título"
                        onChange={e => setTitle(e.target.value)}
                    />

                    <TextArea 
                    placeholder="Observações"
                    onChange={e => setDescription(e.target.value)}
                    />

                    <Section title="Links úteis">
                        {
                            links.map((link, index) => (
                            <NoteItem
                                key={String(index)}
                                value={link} 
                                onClick={() => handleRemoveLink(link)}
                            />
                        ))
                        }
                        <NoteItem
                            value={newLink} 
                            placeholder="Novo link" 
                            isNew
                            onChange={e => setNewLink(e.target.value)}
                            onClick={handleAddLink}
                        />
                    </Section>

                    <Section title="Marcadores">
                        {
                            tags.map((tag, index) => (
                            <NoteItem
                                key={String(index)} 
                                value={tag}
                                onClick = {() => {handleRemoveTag(tag)}}
                            /> 
                            ))
                        }
                        <div className="tags">
                            <NoteItem 
                                value={newTag}
                                placeholder="Novo marcador"
                                isNew
                                onChange={e => setNewTag(e.target.value)}
                                onClick={handleAddTag}
                            />
                        </div>   
                    </Section>

                    <Button title="Salvar"
                     onClick = {handleNewNote}
                    />
                </Form>
             </main>
        </Container>  
    )
}