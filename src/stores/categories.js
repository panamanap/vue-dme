import {defineStore} from "pinia";
import axios from "axios";

export const useCategoriesStore = defineStore({
    id:'categories',
    state: () => ({
        selected: {
            categories: null,
            subcategories: null
        },
        categories: [
            {id: 1, title: 'categories1', parent: 'categories', selected: false},
            {id: 2, title: 'categories2', parent: 'categories', selected: false},
            {id: 3, title: 'categories3', parent: 'categories', selected: false},
            {id: 4, title: 'categories4', parent: 'categories', selected: false},
            {id: 5, title: 'categories5', parent: 'categories', selected: false},
        ],
        subcategories: [
            {id: 1, title: 'subcategories1', parent: 'subcategories', selected: false},
            {id: 2, title: 'subcategories2', parent: 'subcategories', selected: false},
            {id: 3, title: 'subcategories3', parent: 'subcategories', selected: false},
            {id: 4, title: 'subcategories4', parent: 'subcategories', selected: false},
            {id: 5, title: 'subcategories5', parent: 'subcategories', selected: false},
        ],
    }),
    actions: {
        onOpenCategory(id, parent) {
            
            const newEl = this[parent].find(obj => obj.id === id);
            
            if(this.selected[parent] === id) {
                newEl.selected = !newEl.selected;
                this.selected[parent] = null;
                return
            } else if(this.selected[parent]) {
                const el = this[parent].find(obj => obj.id === this.selected[parent]);
                el.selected = false;
            }
            
            newEl.selected = !newEl.selected;
            this.selected[parent] = id;
 
        }
    }
})