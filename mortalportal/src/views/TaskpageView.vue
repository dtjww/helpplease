<!-- Mel -->

<template>
    <NavBar/>

    <h3>Create a New Task</h3>
    <div><q-card class="card">
        <form>
            
            <table>
                <tr>
                    <td><h6>Category of Task</h6></td>
                </tr>
                <tr>
                    <td><q-select outlined v-model="inputData.category" :options="task" label="Choose a Task" class="inputboxes" /></td>
                </tr>

                <tr>
                    <td><h6>Name of Task</h6></td>
                </tr>
                <tr>
                    <td><q-input outlined v-model="inputData.name" placeholder="Name of Task" maxlength="30" class="inputboxes"/></td>
                </tr>

                <tr>
                    <td><h6>Description of Task</h6></td>
                </tr>
                <tr>
                    <td><q-input outlined v-model="inputData.desc" placeholder="Description of Task" maxlength="30" class="inputboxes"/></td>
                </tr>

                <tr>
                    <td><h6>Price</h6></td>
                </tr>
                <tr>
                    <td>
                        <q-input outlined v-model="inputData.price" placeholder="Price" maxlength="30" class="price" prefix='$'/>
                    </td>
                </tr>

                <tr>
                    <td><h6>Location</h6></td>
                </tr>
                <tr>
                    <td><q-input outlined v-model="inputData.loc" placeholder="Location of Task" maxlength="30" class="inputboxes"/></td>
                </tr>

                <tr>
                    <td><h6>Date & Time</h6></td>
                </tr>
                <tr>
                        <td>
                            <q-input v-model="inputData.time" outlined type="time" class='date'/> 
                            <q-input v-model="inputData.date" outlined type="date" class="time"/>
                        </td>

                </tr>
                <tr>
                    <td>
                        <h6>Image (Optional)</h6>
                    </td>
                </tr>
                <tr>
                    <td>
                        <q-btn color="dark" label="upload image" 
                        @click="uploadImage" class="date" />
                        <input
                            type="file"
                            style="display: none"
                            ref="fileInput"
                            accept='image/*'
                            @change=onFilePicked 
                            />
                        
                    </td>
                </tr>
                <tr>
                    <td>
                        <img v-if ='imageUrl != ""' 
                        :src="imageUrl" height="150" class="date">
                    </td>
                </tr>
            </table>
            <router-link to="/home">
                <q-btn color="white" text-color="black" label="Post Task" class='button' @click=submitDB />
            </router-link>
        </form>
    </q-card>
    </div>
 
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import { db, storage } from '../firebase.js';
import { push, ref as dbRef , update} from "firebase/database";
import { ref as stRef, uploadBytes, getDownloadURL } from 'firebase/storage';
  
export default {
    
  data () {
    return {
      model: '',
      task: [
        'Shopping', 'Physical', 'Assignment/Project', 'Hardware/Software'
      ],
      inputData: {
        time: '',
        date: '',
        loc: '',
        name: '',
        desc: '',
        category: '',
        file: '',
        price: '',
      },
      imageUrl:'',
      image:null
    }
  },
  components:{
        NavBar
  },
  methods:{
        // Run when Button is clicked
        uploadImage(){
            this.$refs.fileInput.click()
        },
        // running the input function, pushing a preview of the image file
        onFilePicked(event){
            console.log(event.target);
            const file = event.target.files;
            
            let filename = file[0].name;
            if(filename.lastIndexOf(
                '.') <= 0){
                    return alert('Not a valid file');
                }
            const fileReader = new FileReader();
            fileReader.onload = () => {
                this.imageUrl = fileReader.result
            };
            fileReader.readAsDataURL(file[0]);
            this.image = file[0];
        },
        submitDB(){
            // Parsing the data into firebase Realtime Database
            let key;
            let ext;
            push(dbRef(db, 'DreemTeem') , this.inputData)
            .then((data) => {
                // to get the key of the file                
                key = data.key;
                return key
            })
            .then(key => {
                // to get the extension of the file + uploading onto firebase
                const filename = this.image.name;
                ext = filename.slice(filename.lastIndexOf('.'));
                return uploadBytes(stRef(storage, 'DreemTeem/' + key + '.' + ext), this.image)
            })
            .then(() => {
                // Get the download URL from the storage and then pushing that URL onto Firebase Database "file" key. 
                getDownloadURL(stRef(storage, 'DreemTeem/' + key + '.' + ext))    
                    .then((url) => {
                        console.log('123')
                        console.log(url)
                        
                        const updates = {
                        file: url
                    }
                    return update(dbRef(db,'DreemTeem/' + key),updates)
                    })
                    .catch(catchError => {
                        console.log(catchError)
                    })
                
            })
            }
        }
    }

</script>

<style>

.card{
    width:700px;
    margin-left:auto;
    margin-right:auto;
    margin-bottom: 50px;
    padding:50px;

}
h6{
    margin:auto;
    text-align:left;
}

.inputboxes{
    width:600px;
    margin-top:10px;
    margin-bottom: 10px;
    margin-left:0px;
    text-align:center;
    
}

.price{
    width:100px;
    text-align:center;

}

.date{
    width:250px;
    float:left;
    margin-right:5px;
}

.time{
    width:250px;
    float:left;
    margin-left:5px;
}

h3{
    margin:auto
}

.button{
    margin:15px;
}

</style>