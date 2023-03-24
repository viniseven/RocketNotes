import { Header} from '../../components/Header';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';

import { Link } from 'react-router-dom';

import { Container, Form} from './styles'


export function CreateNote(){
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
                        type="text"                
                    />

                    <TextArea placeholder="Observações"/>

                    <Section title="Links úteis">
                        <NoteItem value="https://rocketseat.com.br"/>
                        <NoteItem placeholder="Novo link" isNew/>
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem value="React"/>
                            <NoteItem placeholder="Novo marcador" isNew/>
                        </div>   
                    </Section>

                    <Button title="Salvar"/>
                </Form>
             </main>
        </Container>  
    )
}