import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products:[],
    cartItems:[],
  },
  getters: {
    getCatalog(state){ return state.products},
    //получение корзины
    getCart(state){
      return state.cartItems//эта функция возвращает корзину из хранилища
    }
  },
  mutations: {
    setCatalog(state, payload) {state.products = [...state.products, ...payload] },//установка каталога
    addToCart(state, good) {//Добавить в корзину
      const goodInCart = state.cartItems.find((element)=> element.id_product === good.id_product)//найдем этовар в корзине
      if (goodInCart){//если он существует
        goodInCart.count++//увеличиваем его количество
        goodInCart.finishprice = goodInCart.count * goodInCart.price;
        console.log (state.cartItems);
      } else {//если его нет, то ищем внутри каталога
        const product = Object.assign({count: 1, finishprice: good.price}, good)//создаем объект с количеством 1 и ценой равной продуктовой цены
        state.cartItems.push(product);
        console.log (state.cartItems);
      }
    },
    deleteFromCart(state,good){
      if (good.count>1){//Если количество товара больше 0
        good.count--;//уменьшаем количество на единицу
        good.finishprice = good.count * good.price; //пересчитываем стоимость за вид товара
        this.totalSumm -= good.price; //пересчитываем итоговую стоимость за всю корзину товаров
      }   else {
        let find = state.cartItems.find((element) => element.id_product === good.id_product);
        //удаляем из корзины товаров 1 товар с порядкового номера това с выбранным id
        this.state.cartItems.splice(state.cartItems.indexOf(find),1)//удаляем из массива корзины 1 товар начиная с индекса выбранного товара
        console.log(state.cartItems);
        this.totalSumm -= good.price;//пересчитываем итоговую стоимость за всю корзину товаров
      }
    },
  },
  actions: {
    loadCatalog({commit}){//передаем объекь для работы со стейтом, и с помощью деструктуризации передаем метод этого объекта - commit - вызывает какие-то мутации
      return fetch('https://raw.githubusercontent.com/YuliyaMikhaleva/clothing_store_api/master/response/catalogData.json')
          .then((response) => {
            return response.json()//превращаем json-формат в обычный объект
          })
          .then((goodList) => {//массив передаем в мутацию setCatalog  с помощью commit
            console.log(goodList)
            commit('setCatalog', goodList)
          })
    }
  },
  modules: {},
});
