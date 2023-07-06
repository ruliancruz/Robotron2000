const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const control = document.querySelectorAll(".controle-ajuste[data-part]");
const controlcolors = document.querySelectorAll("[data-color]");
const statistics = document.querySelectorAll("[data-statistic]");

const parts =
{
    "bracos":
    {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem":
    {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },

    "nucleos":
    {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },

    "pernas":
    {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },

    "foguetes":
    {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

control.forEach((element) => element.addEventListener("click", (event) => manipulateData(event.target)));
controlcolors.forEach((element) => element.addEventListener("click", (event) => manipulateColor(event.target)));

function manipulateColor(color)
{
    document.getElementById("robo").src = "img/robotron-" + color.dataset.color + ".png";
}

function manipulateData(control)
{
    if(control.dataset.control === "add")
    {
        control.parentNode.querySelector("[data-counter]").value++;
    }
    else
    {
        control.parentNode.querySelector("[data-counter]").value--;
    }

    updateStatistics(control.dataset);
}

function updateStatistics(data)
{
    console.log(statistics);

    if(data.control === "add")
    {
        statistics.forEach((element) =>
        {
            element.textContent = parseInt(element.textContent) + parts[data.part][element.dataset.statistic];
        });
    }
    else
    {
        statistics.forEach((element) =>
        {
            element.textContent = parseInt(element.textContent) - parts[data.part][element.dataset.statistic];
        });
    }
}