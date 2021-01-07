const App = {
    data() {
        return {
            title: 'Список покупок',
            placeholderString: 'Введите название покупки',
            inputValue: '',
            notes: ['Бананы', 'Киви', 'Яблоки']
        }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value
        },
        addNewNote() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        delitNote(idx) {
            this.notes.splice(idx, 1)
        }
    }
    
}
Vue.createApp(App).mount('#app')