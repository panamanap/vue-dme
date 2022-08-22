import {defineStore} from "pinia";
import axios from "axios";

export const useCardsStore = defineStore({
    id: 'edit',
    state: () => ({
        cards: [],
        searchText: '',
        page: 1,
        limit: 10,
        totalPages: 0,
        selectedСards: [],
    }),
    getters: {
        searchedCards() {
            return this.cards.filter(card => card.title.toLowerCase().includes(this.searchText.toLowerCase()))
        }
    },
    actions: {
        async fetchCardsInformation() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit
                    }
                });
                this.cards = response.data.map(obj => ({...obj, selected: false}));
                this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
            } catch (e) {
                console.log('Failed to get data')
            }
        },
    
        changePage(pageNumber) {
            this.page = pageNumber;
            this.loadMoreCards();
        },
    
        async loadMoreCards() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit
                    }
                });
                this.cards = response.data.map(obj => ({...obj, selected: false}));
            } catch (e) {
                console.log('Failed to get data')
            } finally {
            
            }
        },
        
        selectedCard(id, value) {
            
            const el = this.cards.find(obj => obj.id === id);
            
            if(el.selected) {
                this.selectedСards = this.selectedСards.filter(selectedId => selectedId !== id);
            } else {
                this.selectedСards.push(id)
            }
    
            console.log(this.selectedСards)

            el.selected = value;
        },
    
        deletingSelectedCards() {
           
            this.selectedСards.forEach(selectedId =>
                this.cards = this.cards.filter(obj => {
                    // if(selectedId === obj.id) axios.delete('')
                    
                    return selectedId !== obj.id
                })
            )
            
            this.selectedСards = [];
        }
    }
})