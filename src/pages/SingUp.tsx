import { FunctionComponent } from "react";
import book from '../assets/book.svg'

interface SingUpProps {

}

const SingUp: FunctionComponent<SingUpProps> = () => {
    return (
        <div className="max-w-4xl mx-auto font-[sans-serif] p-6">
            <div className="text-center mb-16">
                <a href="javascript:void(0)"><img
                    src={book} alt="logo" className='w-52 inline-block' />
                </a>
                <h4 className="text-gray-800 text-base font-semibold mt-6">Crea tu Cuenta!</h4>
            </div>

            <form>
                <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">Nombre</label>
                        <input name="name" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" 
                        placeholder="Nombre" />
                    </div>
                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">Apellido</label>
                        <input name="lname" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" 
                        placeholder="Apellido" />
                    </div>
                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">Email</label>
                        <input name="email" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" 
                        placeholder="email@deprueba.gg" />
                    </div>
                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">Cel</label>
                        <input name="number" type="number" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" 
                        placeholder="+AA 12345678" />
                    </div>
                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">Contraseña</label>
                        <input name="password" type="password" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" 
                        placeholder="Contraseña" />
                    </div>
                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">Confirmar Contraseña</label>
                        <input name="cpassword" type="password" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" 
                        placeholder="Confirmar Contraseña" />
                    </div>
                </div>

                <div className="!mt-12">
                    <button type="button" className="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                        Registrarse
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SingUp;