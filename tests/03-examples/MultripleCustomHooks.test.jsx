import { render, screen } from "@testing-library/react"
import { MultripleCustomHooks } from "../../src/03-examples/MultripleCustomHooks"

describe('Pruebas en MultripleCustomHooks', () => { 



    test('Debe mostrar el componente por defecto', () => { 
        
        render(<MultripleCustomHooks/>);
        expect(screen.getByText('Cargando...'))
        expect(screen.getByText('Información de DBS'))
        
        const nextButton=screen.getByRole('button',{name:'>'})
        screen.debug();
     })
 })