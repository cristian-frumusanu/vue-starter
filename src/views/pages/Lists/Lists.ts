import { Vue, Component } from 'vue-property-decorator';

@Component
export default class HomePage extends Vue {
  shoppingList = ['Apple', 'Banana', 'Milk'];
}
