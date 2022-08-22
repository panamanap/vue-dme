import {defineStore} from "pinia";
import {useCategoriesStore} from '@/stores/categories';
import {useCardsStore} from "./card";

export const useModalStore = defineStore({
    id: 'modal',
    state: () => ({
        type: '',
        show: false,
        title: '',
        id: 0,
        parent: '',
        titleCard: '',
        bodyCard: '',
    }),
    getters: {
    },
    actions: {
        openModal(type, parent='', category='', id=0) {
            this.show = true;
            this.type = type;
            if(type === 'editing') {
                this.title = category;
                this.id = id;
                this.parent = parent;
            } else if(type === 'adding') {
                this.parent = parent;
            } else if(type === 'card') {
                console.log('card')
            }
    
            document.body.style.overflow = 'hidden';
        },
        
        saveTitle() {
            const categoriesStore = useCategoriesStore();
            const item = categoriesStore[this.parent].find(obj => obj.id === this.id);
            if(item.title !== this.title) {
                item.title = this.title;
                this.updateCategory(this.title);
            }
            this.closeModal();
        },
        
        async updateCategory(title) {
            try {
                // const res = await axios.put('', { title });
                
                console.log('Data updated', 'title: ' + title)
            } catch (e) {
                console.log(e)
            }
        },
        
        closeModal() {
            this.title = '';
            this.id = 0;
            this.parent = '';
            this.show = false;
            this.type='';
            this.titleCard = '';
            this.bodyCard = '';
    
            document.body.style.overflow = 'auto';
        },
        
        addCategory() {
            const categoriesStore = useCategoriesStore();
            const obj = {
                id: Math.trunc(Math.random() * 100_000_000),
                title: this.title,
                parent: this.parent
            }
            categoriesStore[this.parent].push(obj);
            this.closeModal();
        },
    
        async sendCategory(obj) {
            try {
                // const res = await axios.post('', obj );
            
                console.log('Data sent', 'obj: ' + JSON.stringify(obj))
            } catch (e) {
                console.log(e)
            }
        },
    
        addCard() {
            const cardsStore = useCardsStore();
            const obj = {
                id: Math.trunc(Math.random() * 100_000_000),
                title: this.titleCard,
                body: this.bodyCard,
            }
            cardsStore.cards.push(obj);
            this.sendCard(obj)
            this.closeModal();
        },
        
        async sendCard(obj) {
            try {
                // const res = await axios.post('', obj );
            
                console.log('Card sent', 'obj: ' + JSON.stringify(obj))
            } catch (e) {
                console.log(e)
            }
        },
        
    }
})