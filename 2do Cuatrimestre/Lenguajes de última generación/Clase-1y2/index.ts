const usuarios: IUsuario[] = [(name: "rober", phone: "43248232", adress: "dfsfs")]
const user: IUsuario = {
    name: "sffsfs",
    phone: "432432"
}

interface IUsuario {
    name: string
    phone: string
    adress?: string
}

interface ApiResponse<T> {
    error: string
    data: T
    status: number
}

const response: ApiResponse<IUsuario[]> = {
    error: "este error",
    data: [(name: "data", phone: "432432")],
    status: 200
}


// agg usuarios
// eliminar usuarios por id
// editar usuario por id

//push, splice, filter
/*
const agregarUsuario = (usuario) => {
    usuarios.push(usuario)
 }

agregarUsuario((nombre: "Marcelo", apellido: "Dosko", edad: 65, telefono: "423423432", id: 5))

 const modificarUsuario = (id, nuevoUsuario) => {
    const idx = usuarios.findIndex((usuario) => usuario.id === id)
    if (idx !== -1) {
    usuarios.splice(idx, 1, nuevoUsuario)
    }
 }

 const eliminarUsuario = (id) => {
    //const usuariosFiltrados = usuarios.filter((item) => {
        return usuarios.id !==
    })
    console.log(usuarios, usuariosFiltrados)//
    const idx = usuarios.findIndex((usuario) => usuario.id === id)
    if (idx !== -1) {
    usuarios.splice(idx, 1)
    }
    console.log(usuarios)
}
*/

