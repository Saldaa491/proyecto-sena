// Datos de las motos
const motos = [
    { 
        img: "IMAGENES/1-Motos_Honda-Dio.jpg", 
        marca: "honda", 
        modelo: "Honda Dio",
        color: "Rojo",
        precio: "$8,500,000",
        año: "2023"
    },
    { 
        img: "IMAGENES/1-Motos_Honda-Dio-DLX.jpg", 
        marca: "honda", 
        modelo: "Honda Dio DLX",
        color: "Azul",
        precio: "$9,200,000",
        año: "2023"
    },
    { 
        img: "IMAGENES/2-moto-akt-nkd-125-Classic.jpg",  // Corregido: eliminé .jpg duplicado
        marca: "akt", 
        modelo: "AKT NKD 125 Classic",
        color: "Negro",
        precio: "$6,200,000",
        año: "2022"
    },
    { 
        img: "IMAGENES/4-Moto-Honda-navi-110.jpg", 
        marca: "honda", 
        modelo: "Honda Navi 110",
        color: "Verde",
        precio: "$7,800,000",
        año: "2023"
    },
    { 
        img: "IMAGENES/9-Honda-PCX-160-20245.jpg", 
        marca: "honda", 
        modelo: "Honda PCX 160 2024",
        color: "Blanco",
        precio: "$12,000,000",
        año: "2024"
    },
    { 
        img: "IMAGENES/BAJAJ-Pulsar-ns-125-2024.jpg", 
        marca: "bajaj", 
        modelo: "Bajaj Pulsar NS 125",
        color: "Rojo",
        precio: "$7,500,000",
        año: "2024"
    },
    { 
        img: "IMAGENES/CHR-125-Roja.jpg", 
        marca: "chr", 
        modelo: "CHR 125",
        color: "Rojo",
        precio: "$5,800,000",
        año: "2022"
    },
    { 
        img: "IMAGENES/CR4-150-NEGRA.jpg", 
        marca: "cr4", 
        modelo: "CR4 150",
        color: "Negro",
        precio: "$6,500,000",
        año: "2023"
    },
    { 
        img: "IMAGENES/MAWI-480x480.jpg", 
        marca: "mawi", 
        modelo: "Mawi",
        color: "Amarillo",
        precio: "$4,900,000",
        año: "2021"
    },
    { 
        img: "IMAGENES/Moto-hero-scooter-dash-125-fi.jpg", 
        marca: "hero", 
        modelo: "Hero Dash 125 FI",
        color: "Rojo",
        precio: "$6,700,000",
        año: "2023"
    },
    { 
        img: "IMAGENES/Splendor-Xpro-Gris-Rojo-1.jpg", 
        marca: "honda", 
        modelo: "Honda Splendor Xpro",
        color: "Gris",
        precio: "$7,200,000",
        año: "2023"
    },
    { 
        img: "IMAGENES/suzuki-gixxer-150-fi-abs-2024-1-FIN-88-480x480.jpg", 
        marca: "suzuki", 
        modelo: "Suzuki Gixxer 150",
        color: "Azul",
        precio: "$8,900,000",
        año: "2023"
    },
    { 
        img: "IMAGENES/suzuki-gsx-r150-abs-2024-1-FIN-88-480x480.jpg", 
        marca: "suzuki", 
        modelo: "Suzuki GSX-R150",
        color: "Negro",
        precio: "$10,500,000",
        año: "2023"
    },
    { 
        img: "IMAGENES/TTR-125-Blanca-480x480.jpg", 
        marca: "ttr", 
        modelo: "TTR 125",
        color: "Blanco",
        precio: "$5,300,000",
        año: "2022"
    }
];

// Función para cargar motos con filtros
function cargarMotos(marca = "todos", searchTerm = "") {
    const gridMotos = document.getElementById("gridMotos");
    gridMotos.innerHTML = "";

    const motosFiltradas = motos.filter(moto => {
        const marcaMatch = marca === "todos" || moto.marca === marca;
        const searchMatch = moto.modelo.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          moto.color.toLowerCase().includes(searchTerm.toLowerCase());
        return marcaMatch && searchMatch;
    });

    if (motosFiltradas.length === 0) {
        gridMotos.innerHTML = `<p class="no-results">No se encontraron motos con esos criterios</p>`;
        return;
    }

    motosFiltradas.forEach(moto => {
        const divMoto = document.createElement("div");
        divMoto.className = "moto-item";
        divMoto.innerHTML = `
            <img src="${moto.img}" alt="${moto.modelo}">
            <div class="moto-info">
                <h3>${moto.modelo}</h3>
                <p><strong>Marca:</strong> ${moto.marca.toUpperCase()}</p>
                <p><strong>Color:</strong> ${moto.color}</p>
            </div>
        `;
        gridMotos.appendChild(divMoto);
    });
}

// Eventos para filtros
document.querySelectorAll(".filtro-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".filtro-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const marca = btn.dataset.marca;
        const searchTerm = document.getElementById("searchInput").value;
        cargarMotos(marca, searchTerm);
    });
});

// Evento para búsqueda
document.getElementById("searchBtn").addEventListener("click", () => {
    const searchTerm = document.getElementById("searchInput").value;
    const activeFilter = document.querySelector(".filtro-btn.active");
    const marca = activeFilter ? activeFilter.dataset.marca : "todos";
    cargarMotos(marca, searchTerm);
});

document.getElementById("searchInput").addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        const searchTerm = document.getElementById("searchInput").value;
        const activeFilter = document.querySelector(".filtro-btn.active");
        const marca = activeFilter ? activeFilter.dataset.marca : "todos";
        cargarMotos(marca, searchTerm);
    }
});

// Inicializar
document.addEventListener("DOMContentLoaded", () => {
    cargarMotos();
});