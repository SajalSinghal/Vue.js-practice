import Vue from 'vue'

export const loadData = ({ commit }) => {
    Vue.http.get('data.json')
        .then(response => {
            console.log("response", response)
            return response.json()
        })

        .then(data => {
            console.log("data:::::::::>", data);
            if (data) {
                const funds = data.funds;
                const stocks = data.stocks;
                const stockPortfolio = data.stockPortfolio;

                const portfolio = {
                    funds,
                    stockPortfolio
                };

                console.log("funds && Portfolio::::::::::::::>", stocks, portfolio);

                commit('SET_PORTFOLIO', portfolio);
                commit('SET_STOCKS', stocks);
            }
        })
} 