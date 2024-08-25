
const { DateTime } = luxon;

function calcularDiferencia(startDate) {
    const start = DateTime.fromISO(startDate);
    const now = DateTime.now();

    const diff = now.diff(start, ['years', 'months', 'days']).toObject();

    return {
        years: Math.floor(diff.years),
        months: Math.floor(diff.months),
        days: Math.floor(diff.days)
    };
}

function actualizarContador() {
    const header = document.querySelector('.timeOur');
    const startDate = '2024-01-03';

    const { years, months, days } = calcularDiferencia(startDate);

    header.textContent = `Tiempo juntos: ${years} años, ${months} meses, ${days} días`;
}

actualizarContador();

function collageFunction() {
    Swal.fire({
        title: 'TE AMO',
        imageUrl: "https://imgs.search.brave.com/4C47yacSgCOpthqPJxnTJWGl2OL1BQgehC6eEO4x_PY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91c2Fn/aWYuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9naWYtaGVhcnQt/NjkuZ2lm.gif",
        imageWidth: 350
        
    })
}