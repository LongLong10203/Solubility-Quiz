const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const data = {
    "ammonium": {
        "fluoride": "soluble",
        "chloride": "soluble",
        "bromide": "soluble",
        "iodide": "soluble",
        "chlorate": "soluble",
        "sulfite": "soluble",
        "sulfate": "soluble",
        "carbonate": "soluble",
        "nitrite": "soluble",
        "nitrate": "soluble",
        "phosphate": "soluble"
    },
    "lithium": {
        "fluoride": "slightly soluble",
        "chloride": "soluble",
        "bromide": "soluble",
        "iodide": "soluble",
        "chlorate": "soluble",
        "hydroxide": "slightly soluble",
        "sulfite": "soluble",
        "sulfate": "soluble",
        "carbonate": "slightly soluble",
        "nitrite": "soluble",
        "nitrate": "soluble",
        "phosphate": "insoluble"
    },
    "sodium": {
        "fluoride": "soluble",
        "chloride": "soluble",
        "bromide": "soluble",
        "iodide": "soluble",
        "chlorate": "soluble",
        "hydroxide": "soluble",
        "sulfite": "soluble",
        "sulfate": "soluble",
        "carbonate": "soluble",
        "nitrite": "soluble",
        "nitrate": "soluble",
        "phosphate": "soluble"
    },
    "potassium": {
        "fluoride": "soluble",
        "chloride": "soluble",
        "bromide": "soluble",
        "iodide": "soluble",
        "chlorate": "soluble",
        "hydroxide": "soluble",
        "sulfite": "soluble",
        "sulfate": "soluble",
        "carbonate": "soluble",
        "nitrite": "soluble",
        "nitrate": "soluble",
        "phosphate": "soluble"
    },
    "magnesium": {
        "fluoride": "insoluble",
        "chloride": "soluble",
        "bromide": "soluble",
        "iodide": "soluble",
        "chlorate": "soluble",
        "sulfite": "insoluble",
        "sulfate": "soluble",
        "carbonate": "insoluble",
        "nitrite": "soluble",
        "nitrate": "soluble",
        "phosphate": "insoluble"
    },
    "calcium": {
        "fluoride": "insoluble",
        "chloride": "soluble",
        "bromide": "soluble",
        "iodide": "soluble",
        "chlorate": "soluble",
        "hydroxide": "slightly soluble",
        "sulfite": "insoluble",
        "sulfate": "slightly soluble",
        "carbonate": "insoluble",
        "nitrite": "soluble",
        "nitrate": "soluble",
        "phosphate": "insoluble"
    },
    "barium": {
        "fluoride": "slightly soluble",
        "chloride": "soluble",
        "bromide": "soluble",
        "iodide": "soluble",
        "chlorate": "soluble",
        "hydroxide": "soluble",
        "sulfite": "insoluble",
        "sulfate": "insoluble",
        "carbonate": "insoluble",
        "nitrite": "soluble",
        "nitrate": "soluble",
        "phosphate": "insoluble"
    },
    "silver": {
        "fluoride": "soluble",
        "chloride": "insoluble",
        "bromide": "insoluble",
        "iodide": "insoluble",
        "chlorate": "soluble",
        "hydroxide": "insoluble",
        "sulfite": "insoluble",
        "sulfate": "soluble",
        "carbonate": "insoluble",
        "nitrite": "soluble",
        "nitrate": "soluble",
        "phosphate": "insoluble"
    },
    "lead (II)": {
        "fluoride": "insoluble",
        "chloride": "insoluble",
        "bromide": "insoluble",
        "iodide": "insoluble",
        "chlorate": "soluble",
        "hydroxide": "insoluble",
        "sulfite": "insoluble",
        "sulfate": "slightly soluble",
        "carbonate": "insoluble",
        "nitrite": "soluble",
        "nitrate": "soluble",
        "phosphate": "insoluble"
    }
}

function getRandomElement(arr) {
    return arr[(Math.floor(Math.random() * arr.length))]
}

function getRandomCation() {
    return getRandomElement(Object.keys(data))
}

function getRandomAnion(cation) {
    return getRandomElement(Object.keys(data[cation]))
}

function capitalise(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function getSolubility(cation, anion) {
    return data[cation][anion]
}

const container = document.getElementById("container")
const question = document.getElementById("question")
const buttonClass = document.getElementsByClassName("button")
const resultDiv = document.getElementById("result-div")
const result = document.getElementById("result")
const solTable = document.getElementById("sol-table")

let cation = getRandomCation()
let anion = getRandomAnion(cation)
question.innerHTML = capitalise(cation) + " " + anion

async function checkAnswer(button) {
    container.style.display = "none"
    resultDiv.style.display = ""
    const solubility = button.innerHTML
    if (solubility == getSolubility(cation, anion)) {
        document.body.style.backgroundColor = '#d4edda' // Light green
        setTimeout(() => {
            document.body.style.backgroundColor = '#f0f0f0'
        }, 1000)
        result.innerHTML = "Correct"
        for (const button of buttonClass) {
            button.style.display = "block"
        }
        cation = getRandomCation()
        anion = getRandomAnion(cation)
        question.innerHTML = capitalise(cation) + " " + anion
    } else {
        document.body.style.backgroundColor = '#f8d7da' // Light red
        setTimeout(() => {
            document.body.style.backgroundColor = '#f0f0f0'
        }, 1000)
        result.innerHTML = "Wrong"
        button.style.display = "none"
    }
    await delay(1000)
    container.style.display = ""
    resultDiv.style.display = "none"
}

for (const button of buttonClass) {
    button.addEventListener("click", function() {
        checkAnswer(button)
    })
}

solTable.addEventListener("click", function() {
    window.open("https://www.sigmaaldrich.com/deepweb/assets/sigmaaldrich/marketing/global/images/technical-documents/articles/materials-science-and-engineering/solid-state-synthesis/solubility-rules-chart-vector-mk.svg")
})