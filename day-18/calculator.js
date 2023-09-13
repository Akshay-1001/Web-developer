function calculator() {
    try {
        document.calcu.display.value = eval(document.calcu.display.value)
    }
    catch(error) {
        document.calcu.display.value = 'bruhh seriously'
    }
}