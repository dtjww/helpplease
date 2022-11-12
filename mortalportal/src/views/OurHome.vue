<!-- Mel -->

<template>
    <!-- Navigation Bar -->
    <div class="q-pa-none">
        <q-toolbar class="text-white q-my-none shadow-2" :style="style" id="navbar">

            <q-toolbar-title shrink>
                <router-link to="/home/angel" style="color: white; text-decoration: none">
                    <q-img src="../assets/MainLogoWhite.png" style="width:170px"></q-img>
                </router-link>
            </q-toolbar-title>
            <q-space />
            <div class="lt-xs">
                <q-btn stretch flat label="Saved" @click="gotoSaved()" />

                <q-btn stretch flat label="My Account" @click="handleClick()"/>

                <q-btn stretch flat label="Log Out" @click="exit()"/>

            </div>

            <div class="gt-s">
                <!-- <q-btn flat dense icon="menu" @click="leftDrawerOpen = !leftDrawerOpen" /> -->
                <q-btn-dropdown flat dense dropdown-icon="menu" no-icon-animation=True>
                    <q-list>
                        <q-item-label header>Menu</q-item-label>
                        <q-item clickable v-ripple >
                            <q-item-section avatar>
                                <q-icon name="favorite" />
                            </q-item-section>
                            <q-item-section @click="gotoSaved()">Saved</q-item-section>
                        </q-item>
                        
                        <q-item clickable v-ripple>
                            <q-item-section avatar>
                                <q-icon name="person" />
                            </q-item-section>
                            <q-item-section @click="handleClick()">My Account</q-item-section>
                        </q-item>
                        <q-item clickable v-ripple>
                            <q-item-section avatar>
                                <q-icon name="logout" />
                            </q-item-section>
                            <q-item-section @click="exit()">Log Out</q-item-section>
                        </q-item>
                    </q-list>
                </q-btn-dropdown>
            </div>

        </q-toolbar>
    </div>

    <table align="center">
        <tr>
            <td class="actionbtns">
                <q-btn v-if="targetP == 'angel'" color="dark" flat rounded v-model="Selection" @click='angelBtn'>
                    <h5>Angel</h5>
                </q-btn>
                <q-btn v-else flat rounded v-model="Selection" @click='angelBtn'>
                    <h5>Angel</h5>
                </q-btn>
            </td>
            <td width:10px>
                |
            </td>
            <td class="actionbtns">
                <q-btn v-if="targetP == 'mortal'" flat color="positive" rounded v-model="Selection" @click="mortalBtn">
                    <h5>Mortal</h5>
                </q-btn>
                <q-btn v-else flat rounded v-model="Selection" @click="mortalBtn">
                    <h5>Mortal</h5>
                </q-btn>
            </td>
        </tr>
    </table>

    <!-- Angel -->
    <div v-if="Selection == 'Angel' && targetP == 'angel'">
        <table align="center">
            <tr>
                <td align='center'>
                    <q-btn v-if="activeBtn == 'Find'" color="dark" v-model="activeBtn" class="actionbtns"
                        @click="FindBtn">Find</q-btn>
                    <q-btn v-else v-model="activeBtn" class="actionbtns" @click="FindBtn">Find</q-btn>
                </td>
                <td align='center'>
                    <q-btn v-if="activeBtn == 'Saved'" color='dark' v-model="activeBtn" class="actionbtns"
                        @click="SavedBtn">Saved</q-btn>
                    <q-btn v-else v-model="activeBtn" class="actionbtns" @click="SavedBtn">Saved</q-btn>
                </td>
                <td align='center'>
                    <q-btn v-if="activeBtn == 'Active'" v-model="activeBtn" color='dark' class="actionbtns"
                        @click="ActiveBtn">Active</q-btn>
                    <q-btn v-else v-model="activeBtn" class="actionbtns" @click="ActiveBtn">Active</q-btn>
                </td>

            </tr>
            <tr v-if="activeBtn == 'Find'">
                <td colspan="3" align='center'>
                    <q-input rounded outlined label="Search" class="search" v-model="search" color="dark"
                        text-color="white">
                    </q-input>
                </td>
            </tr>
        </table>
        <div>

            <q-card flat class="dCard" v-if="activeBtn == 'Find'">
                <q-card-section>
                    <div class="text-h5">Filter</div>
                </q-card-section>
                <q-card-section class="q-pt-none">
                    <q-list>
                        <h6 class="location">Location</h6>

                        <q-expansion-item label="Central" class="Expand2">
                            <q-scroll-area style="height: 200px;width:auto">
                                <q-card class="qCard">
                                    <div v-for="station in stationCentral" :key="station" class="qcardsec">
                                        <q-checkbox v-model=selectedLoc :val=station.name :label=station.name
                                            color="dark" />
                                    </div>
                                </q-card>
                            </q-scroll-area>
                        </q-expansion-item>


                        <q-expansion-item label="East" class="Expand2">
                            <q-scroll-area style="height: 200px;width:100%">
                                <q-card class="qCard">
                                    <div v-for="station in stationEast" :key="station" class="qcardsec">
                                        <q-checkbox v-model=selectedLoc :val=station.name :label=station.name
                                            color="dark" />
                                    </div>
                                </q-card>
                            </q-scroll-area>
                        </q-expansion-item>

                        <q-expansion-item label="North" class="Expand2">
                            <q-scroll-area style="height: 200px;width:100%">
                                <q-card class="qCard">
                                    <div v-for="station in stationNorth" :key="station" class="qcardsec">
                                        <q-checkbox v-model=selectedLoc :val=station.name :label=station.name
                                            color="dark" />
                                    </div>
                                </q-card>
                            </q-scroll-area>
                        </q-expansion-item>

                        <q-expansion-item label="North-East" class="Expand2">
                            <q-scroll-area style="height: 200px;width:100%">
                                <q-card class="qCard">
                                    <div v-for="station in stationNorthEast" :key="station" class="qcardsec">
                                        <q-checkbox v-model=selectedLoc :val=station.name :label=station.name
                                            color="dark" />
                                    </div>
                                </q-card>
                            </q-scroll-area>
                        </q-expansion-item>

                        <q-expansion-item label="West" class="Expand2">
                            <q-scroll-area style="height: 200px;width:100%">
                                <q-card class="qCard">
                                    <div v-for="station in stationWest" :key="station" class="qcardsec">
                                        <q-checkbox v-model=selectedLoc :val=station.name :label=station.name
                                            color="dark" />
                                    </div>
                                </q-card>
                            </q-scroll-area>
                        </q-expansion-item>

                    </q-list>

                    <q-list>
                        <h6 class="location">Category</h6>
                        <div v-for="task in tasks" :key="task" class='Expand2'>
                            <q-checkbox v-model=category :val=task :label=task color="dark" />
                        </div>

                    </q-list>
                </q-card-section>
            </q-card>
            

        </div>

        <div class="containerAngel boxAngel" v-if="activeBtn == 'Find'">
            <figure v-for="post in searchForTask" v-bind:key="post.id">
                <q-card class="my-card grid-item bg-white text-black">
                    <img :src="post.file">
                    <q-card-section class="fontAlign">
                        Mortal: {{ post.username }} <br>
                        Task: {{ post.name }}<br>
                        Date: {{ post.date }}<br>
                        Time: {{ post.time }}<br>
                        Amount: ${{ post.price }}<br>
                        <q-btn class="q-mt-md" color='dark' text-color="white" @click="iTask(post.id, post.username)">
                            <b>Details</b>
                        </q-btn>
                    </q-card-section>
                </q-card>
            </figure>
        </div>
        <div v-else-if="activeBtn == 'Saved'" class="containerMortal boxMortal">
            <figure v-for="post in searchForSavedTask " v-bind:key="post.id">
                <q-card class="my-card grid-item bg-white text-black">
                    <img :src="post.file">
                    <q-card-section class="fontAlign">
                        Mortal: {{ post.username }} <br>
                        Task: {{ post.name }}<br>
                        Date: {{ post.date }}<br>
                        Time: {{ post.time }}<br>
                        Amount: ${{ ownOffer(post) }}<br>

                        <div v-if="completedCheck(post) == 'pending'">
                            Status: Pending
                        </div>
                        <div v-else-if="post.accepted != null">
                            Status: In Progress
                        </div>
                        <div v-else-if="activeCheck(post)">
                            Status: Offered
                        </div>

                        <div v-if="completedCheck(post) != 'pending'">
                            <q-btn class="q-mt-md" color='white' text-color="black" @click="iTask(post.id, post.username)">
                                <b>Details</b>
                            </q-btn>
                        </div>
                    </q-card-section>
                </q-card>
            </figure>
        </div>

        <div v-else-if="activeBtn == 'Active'" class="containerMortal boxMortal">
            <figure v-for="post in searchForActiveTask " v-bind:key="post.id">
                <q-card class="my-card grid-item bg-dark text-white">
                    <img :src="post.file">
                    <q-card-section class="fontAlign">
                        Mortal: {{ post.username }} <br>
                        Task: {{ post.name }}<br>
                        Date: {{ post.date }}<br>
                        Time: {{ post.time }}<br>
                        Amount: ${{ ownOffer(post) }}<br>

                        <div v-if="completedCheck(post) == 'pending'">
                            Status: Pending
                        </div>
                        <div v-else-if="post.accepted != null">
                            Status: In Progress
                        </div>
                        <div v-else-if="activeCheck(post)">
                            Status: Offered
                        </div>

                        <div v-if="completedCheck(post) != 'pending'">
                            <q-btn class="q-ma-md" color='white' text-color="black" @click="iTask(post.id, post.username)">
                                <b>Details</b>
                            </q-btn>
                        </div>
                    </q-card-section>
                </q-card>
            </figure>
        </div>
    </div>

    <!-- Mortal -->
    <div v-else>
        <q-btn color='positive' @click=goToTask>New Post</q-btn>
        <div class="containerMortal boxMortal">
            <figure v-for="post in MortalTasks" v-bind:key="post.id">
                <div v-if="post.username == currUser">
                    <q-card class="my-card grid-item" style="background: white">
                        <img :src="post.file">
                        <q-card-section class="fontAlign">
                            Task: {{ post.name }}<br>
                            Date: {{ post.date }}<br>
                            Time: {{ post.time }}<br>
                            Amount: ${{ post.price }}<br>

                            <div v-if="post.accepted == null">
                                <q-btn class="q-mr-lg" v-if="post.username == currUser" color='positive' text-color="white"
                                    @click="iTask(post.id, post.username)"><b>Edit</b></q-btn>
                                <q-btn v-if="post.offer != null" color="positive" text-color="white"
                                    @click="viewOffer(post.id)">View Offers</q-btn>

                            </div>

                            <div v-else-if="completedCheck(post) == 'pending'">
                                Status: Pending<br>
                                <q-btn @click="confirmCompletion(post.id, post.username)"> Confirm
                                </q-btn>
                            </div>
                            <div v-else>
                                Status: In Progress
                            </div>
                        </q-card-section>
                    </q-card>
                </div>
            </figure>
        </div>
    </div>


</template>

<script>
import axios from 'axios';
import { ref } from 'vue'
import { useCounterStore } from "@/store/store";
const storeName = useCounterStore()
// import Filter, { default as fData } from '@/components/FilterTable.vue'


export default {
    setup() {

        return {
            tab: ref('mails')
        }
    },

    name: 'PageIndex',
    data() {
        return {
            isLoading: true,
            useData: false,
            useWifi: false,
            posts: {},
            angel: false,
            mortal: false,
            search: '',
            searchPost: [],
            activeBtn: 'Find',
            interactedTasks: [],
            Selection: 'Angel',
            currUser: storeName.username,
            targetP: 'angel',
            statusCount: ref(0),
            filter: false,
            filterLoc: [],
            filterCat: [],
            stationCentral: [{ name: 'Bartley' }, { name: 'Bayfront' }, { name: 'Beauty World' }, { name: 'Bencoolen' }, { name: 'Bendemeer' },
            { name: 'Bishan' }, { name: 'Boon Keng' }, { name: 'Botanic Gardens' }, { name: 'Braddell' }, { name: 'Bras Basah' },
            { name: 'Bugis' }, { name: 'Caldecott' }, { name: 'City Hall' }, { name: 'Clarke Quay' }, { name: 'Dakota' }, { name: 'Dhoby Ghaut' },
            { name: 'Downtown' }, { name: 'Esplanade' }, { name: 'Farrer Park' }, { name: 'Farrer Road' }, { name: 'Fort Canning' }
                , { name: 'Geylang Bahru' }, { name: 'HarbourFront' }, { name: 'Haw Par Villa' }, { name: 'Holland Village' }, { name: 'Jalan Besar' },
            { name: 'Kallang' }, { name: 'Kembangan' }, { name: 'Kent Ridge' }, { name: 'Labrador Park' }, { name: 'Lavender' }, { name: 'Little India' },
            { name: 'Lorong Chuan' }, { name: 'MacPherson' }, { name: 'Marina Bay' }, { name: 'Marina South Pier' }, { name: 'Marymount' }, { name: 'Mattar' },
            { name: 'Mountbatten' }, { name: 'Newton' }, { name: 'Nicoll Highway' }, { name: 'Novena' }, { name: 'one-north' }, { name: 'Orchard' }, { name: 'Outram Park' },
            { name: 'Pasir Panjang' }, { name: 'Paya Lebar' }, { name: 'Potong Pasir' }, { name: 'Promenade' }, { name: 'Queenstown' }, { name: 'Raffles Place' },
            { name: 'Redhill' }, { name: 'Rochor' }, { name: 'Sixth Avenue' }, { name: 'Somerset' }, { name: 'Stadium' }, { name: 'Stevens' }, { name: 'Tai Seng' },
            { name: 'Tan Kah Kee' }, { name: 'Tanjong Pagar' }, { name: 'Telok Ayer' }, { name: 'Telok Blangah' }, { name: 'Tiong Bahru' }, { name: 'Toa Payoh' },
            { name: 'Ubi' }, { name: 'Woodleigh' },],
            stationEast: [{ name: 'Aljunied' }, { name: 'Bedok' }, { name: 'Bedok North' }, { name: 'Bedok Reservoir' }, { name: 'Changi Airport' }, { name: 'Eunos' }, { name: 'Expo' }, { name: 'Kaki Bukit' },
            { name: 'Pasir Ris' }, { name: 'Simei' }, { name: 'Tampines' }, { name: 'Tampines East' }, { name: 'Tampines West' }, { name: 'Tanah Merah' }, { name: 'Upper Changi' },],
            stationNorth: [{ name: 'Admiralty' }, { name: 'Canberra' }, { name: 'Khatib' }, { name: 'Kranji' }, { name: 'Marsiling' }, { name: 'Sembawang' }, { name: 'Woodlands' }, { name: 'Woodlands North' },
            { name: 'Woodlands South' }, { name: 'Yio Chu Kang' }, { name: 'Yishun' },],
            stationNorthEast: [{ name: 'Ang Mo Kio' }, { name: 'Buangkok' }, { name: 'Hougang' }, { name: 'Kovan' }, { name: 'Punggol' }, { name: 'Sengkang' }, { name: 'Serangoon' },],
            stationWest: [{ name: 'Boon Lay' }, { name: 'Bukit Batok' }, { name: 'Bukit Gombak' }, { name: 'Bukit Panjang' }, { name: 'Buona Vista' }, { name: 'Cashew' },
            { name: 'Chinatown' }, { name: 'Chinese Garden' }, { name: 'Choa Chu Kang' }, { name: 'Clementi' }, { name: 'Commonwealth' }, { name: 'Dover' }, { name: 'Gul Circle' },
            { name: 'Hillview' }, { name: 'Joo Koon' }, { name: 'Jurong East' }, { name: 'King Albert Park' }, { name: 'Lakeside' }, { name: 'Pioneer' }, { name: 'Tuas Crescent' },
            { name: 'Tuas Link' }, { name: 'Tuas West Road' }, { name: 'Yew Tee' },],
            selectedLoc: ref([]),
            category: ref([]),
            tasks: [
                'Shopping', 'Physical', 'Assignment/Project', 'Hardware/Software'
            ],
            completeTaskDialog: false,
            focus_id: '',
            menuItems: [
                {
                    label: "My Account",
                    to: "/profile",
                    icon: "person"
                },
                {
                    label: "My Tasks",
                    to: "/profile",
                    icon: "assignment"
                },
                {
                    label: "Logout",
                    to: "/",
                    icon: "exit_to_app"
                }
            ],
            style:''
        }
    }

    , methods: {
        getPost() {
            axios.get('https://dreemteem-829c5-default-rtdb.firebaseio.com/TaskData.json')
                .then(response => {
                    this.posts = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        },
        getOwnTask() {
            axios.get('https://dreemteem-829c5-default-rtdb.firebaseio.com/Login/' + storeName.username + '/tasksInteracted.json')
                .then(response => {
                    this.interactedTasks = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        },
        goToTask() {
            this.$router.push('/task')
        },
        iTask(id, username) {
            console.log(username)
            this.$router.push({ name: 'Task Details', params: { id: id, poster: username } })
        },
        FindBtn() {
            this.activeBtn = 'Find'
            console.log(this.activeBtn)
        },
        SavedBtn() {
            this.activeBtn = 'Saved'
            console.log(this.activeBtn)
        },
        ActiveBtn() {
            this.activeBtn = 'Active'
            console.log(this.activeBtn)
        },
        angelBtn() {
            this.Selection = 'Angel'
            this.targetP = 'angel'
            document.getElementById('navbar').style.backgroundColor = '#3760b8'
        },
        mortalBtn() {
            this.Selection = 'Mortal'
            this.targetP = 'mortal'
            document.getElementById('navbar').style.backgroundColor = '#efa2a4'
        },
        viewOffer(id) {

            this.$router.push({ name: 'Offers', params: { id: id } })
        },
        ownOffer(iOffer) {
            if (iOffer.accepted == null) {
                for (var cOffer in iOffer.offer) {
                    if (cOffer == this.currUser) {
                        return iOffer.offer[cOffer].offer
                    }
                }
            } else {
                for (var eOffer in iOffer.accepted) {
                    if (eOffer == this.currUser) {
                        return iOffer.accepted[eOffer].offer
                    }
                }
            }
        },
        activeCheck(currPost) {
            console.log(currPost)
            var values = Object.values(currPost)

            var result = values.filter(post => post.angel == this.currUser)
            console.log(result)

            return result
        },
        completedCheck(currPost) {

            if (currPost.accepted == null) {
                return null
            }
            else {
                var values = Object.values(currPost.accepted)
                var result = values.filter(post => post.status == 'pending')
                if (result.length > 0) {
                    return 'pending'
                }
                else {
                    return null
                }
            }

        },
        confirmCompletion(id, username) {
            this.$router.push({ name: 'Task Details', params: { id: id, poster: username } })
        },
        completeCheck(post) {
            if (post.accepted == null) {
                return null
            }
            else {
                var values = Object.values(post.accepted)
                var result = values.filter(accept => accept.status == 'completed')
                if (result.length == 0) {
                    return null
                }
                else {
                    return 'completed'
                }
            }
        },
        handleClick() {
            this.$router.push('/profile')
        },
        gotoSaved() {
            this.$router.push('/home/angel')
            // need to include a way to select the saved tasks filter
        },
        gotoChat() {
            this.$router.push('/chat')
        },
        exit() {
            storeName.username = ''
            storeName.email = ''
            storeName.name = ''
            this.$router.push({ name: 'Landing' })
        }
    },

    computed: {
        searchForTask() {
            var values = Object.values(this.posts)
            if (this.selectedLoc.length == 0 && this.category.length == 0) {
                var unFiltered = values.filter(post =>
                    post.name.toLowerCase().includes(this.search.toLowerCase()) &&
                    post.username != this.currUser &&
                    post.accepted == null
                )
                return unFiltered
            } else {
                var loc = Object.values(this.selectedLoc)
                var cat = Object.values(this.category)
                var filtered = values.filter(post =>
                    post.name.toLowerCase().includes(this.search.toLowerCase()) &&
                    (cat.filter(eCat => post.category == eCat).length > 0 ||
                        loc.filter(eLoc => post.loc == eLoc).length > 0) &&
                    post.username != this.currUser &&
                    post.accepted == null
                )
                return filtered
            }
        },
        searchForSavedTask() {
            var allTask = Object.values(this.posts)
            if (this.interactedTasks.saved == null) {
                return []
            } else {
                var values = Object.values(this.interactedTasks.saved)
                var result = allTask.filter(post => (values.filter(task => task.taskid == post.id && task.status == 'saved')).length > 0)
                console.log(result)
                return result
            }

        },
        searchForActiveTask() {
            var allTask = Object.values(this.posts)
            console.log(this.interactedTasks)
            if (this.interactedTasks == null) {
                return []
            } else {
                var values = Object.values(this.interactedTasks.active)
                var result = allTask.filter(post =>
                    (values.filter(task =>
                        task.taskid == post.id && (task.status == 'accepted' || task.status == 'offer' || task.status == 'pending'))).length > 0)
                return result
            }
        },
        MortalTasks() {
            var values = Object.values(this.posts)
            var result = values.filter(post => post.username == this.currUser && this.completeCheck(post) != 'completed')
            return result
        },



    },


    created() {
        this.getPost();
        this.getOwnTask();
        console.log(this.interactedTasks)
        if (this.$route.params.targetP == 'angel') {
            this.targetP = 'angel'
            this.style = 'background-color: #3760b8'
        }
        else {
            this.targetP = 'mortal'
            this.style='background-color: #efa2a4'
            
        }
        if (storeName.username == '') {
            this.$router.push('/login')
        }
        else {
            this.currUser = storeName.username
        }

    },

}
</script>

<style lang="scss" scoped>
.Expand2 {
    margin-left: 1.5vw;
    text-align: left;
    font-size: medium;
}

.location {
    text-align: left;
    margin-left: 1vw;
    margin-top: 1vh;
    margin-bottom: 1vh;
}

.qcardsec {
    /* float: left; */
    column-span: 1;
    text-align: left;
    font-size: small;
}

.qCard {
    column-count: 1;
    text-align: left;
    width: auto;
}

.filter {
    margin-top: 10px;
    margin-bottom: 15px;
}

.qcardsec {
    width: auto;
}

.dCard {
    width: 20vw;
    float: left;
    margin-left: 5vw;
    border-radius: 0px;
}

.dActions {
    clear: left;
}

.search {
    margin-top: 15px;
    margin-bottom: 15px;
    width: 36vw;
    float: left
}

.actionbtns {
    width: 150px;
}

.my-card {
    max-width: 250px;
    width: 100%;

}

.grid-item {
    max-width: 300px;
    display: block;
}

.boxAngel {
    padding: 0px 10% 50px 5%;
}

.boxMortal {
    padding: 50px 10%;
}

.fontAlign {
    text-align: left;
    padding-left: 30px;
}

// ----------------------------------


/////////////////////////////////////////////////////////////

body {
    background-color: #000;
    font: 1.1em Arial, Helvetica, sans-serif;

}

img {
    max-width: 100%;
    display: block;
    border-radius: 10%;
}

figure {
    margin: 0;
    display: grid;
    grid-template-rows: 1fr auto;
    margin-bottom: 10px;
    break-inside: avoid;
}

figure>q-card {
    grid-row: 1 / -1;
    grid-column: 1;
}

.containerAngel {
    column-count: 3;
    column-gap: 10px;
    grid-template-columns: repeat(5, 1fr);
}

.containerMortal {
    column-count: 4;
    column-gap: 10px;
    grid-template-columns: repeat(4, 1fr);
}


@media (max-width: 1080px) {
    .containerAngel {
        grid-template-columns: repeat(3, 1fr);
        column-count: 3;
        column-gap: 10px;
    }

    .containerMortal {
        column-count: 3;
        column-gap: 10px;
        grid-template-columns: repeat(5, 1fr);
    }

    .q-card {
        max-width: 100%;
    }

}

@media (max-width: 800px) {
    .containerAngel {
        grid-template-columns: repeat(2, 1fr);
        column-count: 2;
        column-gap: 10px;
    }

    .containerMortal {
        column-count: 2;
        column-gap: 10px;
        grid-template-columns: repeat(5, 1fr);
    }

    .q-card {
        max-width: 100%;
    }

}

@media (max-width: 600px) {
    .containerAngel {
        grid-template-columns: repeat(2, 1fr);
        column-count: 2;
        column-gap: 10px;
    }

    .containerMortal {
        column-count: 2;
        column-gap: 10px;
        grid-template-columns: repeat(5, 1fr);
    }

    .q-card {
        max-width: 100%;
    }
}

@media (max-width: 500px) {
    .containerAngel {
        grid-template-columns: repeat(1, 1fr);
        column-count: 1;
        column-gap: 10px;
    }

    .q-card {
        max-width: 100%;
    }
}
</style>
