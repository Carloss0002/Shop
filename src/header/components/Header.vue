<template>
    <div class="header">
        <navbar-vanilla />
    </div>
</template>

<script>
export default {
    data() {
        return {
           
        }
    },
    mounted() {
        this.construirNavbar();
    },
    
    
    methods: {
        setRotas() {
            // páginas apenas do vueJs
          let paginasVue = {
                itens: [{
                    subitens: [
                        {
                            evento: "evento-click-home",
                            rota: "/"
                        }
                    ]
                }]
            };

            paginasVue.itens.forEach(item => {
                document.addEventListener(item.evento, () => {
                    if(item.rota.match(/http/)) {
                        window.location = item.rota
                    } else {
                        this.$router.push(item.rota, () => {});
                    }
                });

                if (item.subitens) {
                    item.subitens.forEach(subitem => {
                        document.addEventListener(subitem.evento, () => {
                            if(subitem.rota.match(/http/)) {
                                window.location = subitem.rota
                            } else {
                                this.$router.push(subitem.rota, () => {});
                            }
                        });
                    });
                }
            });
        },

        construirNavbar() {
            this.navbar = new Navbar(this.getParametrosNavbar());
        },

        getParametrosNavbar() {
            const navbarParameters = {
                backgroundColor: '#464646',
                hoverColor: '#7F7E7E',
                color: '#FFFFFF',
                logos: [
                    {
                        src: '/images/logo_alterdata_light.png',
                        href: '/Home',
                    }
                ],
                items: [
                    {
                        text: 'home',
                        clickEvent: '',
                        customClass: 'cor-branca-ancora',
                        href: '/Home',
                        position: 'center',
                    },
                    {
                        text: 'Carrinho',
                        clickEvent: '',
                        customClass: 'cor-branca-ancora',
                        href: '/Salvos',
                        position: 'center',
                    },
                    {
                        text: 'Sair',
                        clickEvent: '',
                        customClass: 'cor-branca-ancora',
                        href:'/Sair',
                        position: 'center',
                    }
                ],
                dropDowns: [
                    {
                        position: 'center',
                        text: 'Produtos',
                        clickEvent: '',
                        customClass: 'cor-branca-ancora',
                        columns: [
                            {
                                contentBoxes: [
                                    {
                                        text: 'Categorias',
                                        items: [
                                            {
                                                text: 'Eletronicos',
                                                href: '/categorias/eletronicos',
                                            },
                                            {
                                                text: 'Livros',
                                                href: '/categorias/livros'
                                            }
                                        ]
                                    },
                                ]
                            },
                        ]
                    }

                ],
            };
            return navbarParameters;
        }

    }
}
</script>

<style>

</style>