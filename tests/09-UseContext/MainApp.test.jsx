import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { MainApp } from "../../src/09-UseContext"

describe('Pruebas en el componente <MainApp/>', () => { 
    
    test('debe mostrar el HomePage', () => { 
        
        render(
        <MemoryRouter>
        <MainApp/>
        </MemoryRouter>
        
         );
         expect(screen.getByText('HomePage') ).toBeTruthy();

     });

     test('debe mostrar el LoginPage', () => { 
        
        render(
        <MemoryRouter initialEntries={['/login']}>
        <MainApp/>
        </MemoryRouter>
        
         );
         expect(screen.getByText('LoginPage') ).toBeTruthy();

     });
 })