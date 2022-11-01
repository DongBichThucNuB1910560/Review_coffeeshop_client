<template>
<v-app id="inspire">
    <v-app-bar app color="white" flat>
        <v-container class="py-0 fill-height">
            <v-img max-height="45" max-width="45" src="./assets/koppee_logo.svg"></v-img>
            <v-btn href="/" text>
                Koppee
            </v-btn>

            <v-spacer></v-spacer>
            <v-avatar color="grey darken-1" size="32"></v-avatar>
            <!-- <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive> -->
        </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
        <v-container>
            <v-row>
                <v-col cols="2">
                    <v-sheet rounded="lg">
                        <v-list color="transparent">
                            <v-list-item v-for="(item, i) in items" :key="i" :to="item.link" link>
                                <v-list-item-content>
                                    <v-list-item-title v-text="item.title">
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-sheet>
                </v-col>

                <v-col>
                    <v-sheet min-height="70vh" rounded="lg">
                      <router-view></router-view>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</v-app>
</template>

<script>
export default {
    data: () => ({
        links: [
            'Koppee',
        ],
        items: [
          {title: "Home", link: "/"},
          {title: "Add Post", link: "/add-post"},
          {title: "About", link: "/about"},
          {title: "Your profile", link: "/user-profile"}
        ]
    }),
}
</script>
