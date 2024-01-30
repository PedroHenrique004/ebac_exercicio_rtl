import { fireEvent, render, screen } from '@testing-library/react';
import Post from '..';
import PostComment from '..';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Testando a inserção de 2 comentários', () => {
        fireEvent.change(screen.getByRole('textbox'), { 
            target: { 
                value: 'Primeiro comentário' 
            }});
        fireEvent.click(screen.getByRole('button'));

        fireEvent.change(screen.getByRole('textbox'), { 
            target: { 
                value: 'Segundo comentário' 
            }});
        fireEvent.click(screen.getByRole('button'));

        const items = screen.getAllByTestId('comentarios-post');
        expect(items).toHaveLength(2);
    })
});