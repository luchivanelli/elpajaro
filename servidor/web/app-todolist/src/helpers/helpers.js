export const handleModal = (id)=> {
    const serviceInfo = document.getElementById(id)
    serviceInfo.classList.toggle('hidden')
    serviceInfo.classList.toggle('flex')
}

export const getServicios = ()=> {
    fetch('https://elpajaro.vercel.app/')
    .then(res => res.json())
    .then(data => {
        return data
    })

}