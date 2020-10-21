export const countLengthMixin = {
    data(){
        return{
            word: 'Random'
        }
    },
    computed:{
        countLength(){
            return this.word + ' (' + this.word.length + ')';
        }
    }
} 