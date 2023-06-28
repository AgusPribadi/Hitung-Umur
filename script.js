const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge() {
    const birthdayValue = birthdayEl.value;
    if (birthdayValue === "") {
        alert("Mohon masukkan tanggal lahirmu");
    } else {
        const age = getAge(birthdayValue);
        if (age > 1) {
            resultEl.innerText = `Umur Kamu ${age} Tahun`;
        } else {
            resultEl.innerText = `Umur Kamu ${age} Tahun`;
        }
    }
}
function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    return age;
}

btnEl.addEventListener("click", calculateAge);
