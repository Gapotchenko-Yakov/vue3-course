export default {
    mounted(el) {
        console.log("🚀 ~ mounted ~ el:", el)
        el.focus();
    },
    name: 'focus',
}