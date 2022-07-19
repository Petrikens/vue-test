<template>
   <div>
      <h1>Posts page</h1>
      <my-button @click="showDialog">Create post</my-button>
      <my-dialog
        v-model:show="dialogVisible"
      >
         <post-form @create="createPost"/>
      </my-dialog>
      <post-list
        :posts="posts"
        @remove="removePost"
      />
   </div>
</template>

<script>
import PostList from "@/components/PosrList.vue";
import PostForm from "@/components/PostForm.vue";
import axios from 'axios';
import MyButton from '@/components/UI/MyButton.vue';

export default {
   components:{
      PostForm, PostList,
      MyButton
   },
   data() {
      return {
         posts:[],
         dialogVisible:false,
         page:1,
         limit:10,
      }
   },
   methods: {
      createPost(post){
         // this.posts.push(post);
         this.dialogVisible = false;
         this.posts=fetch('http://localhost:3001/posts', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
               'Content-type': 'application/json; charset=UTF-8',
            },
         })
         .then((response) => response.json())
         .then((json) => console.log(json));
      },
      removePost(post){
         // this.posts = this.posts.filter(p => p.id != post.id);
         this.posts=fetch('http://localhost:3001/posts/' + post.id, {
            method: 'DELETE',
         })
         .then((response) => response.json())
         .then((json) => console.log(json));
      },
      showDialog(){
         this.dialogVisible = true;
      },
      async fetchPosts(){
         try{
            const response = await axios.get('http://localhost:3001/posts');
            this.posts = response.data;
         } catch(e){
            alert('Error!')
         }
      },
      
   },
   mounted() {
         this.fetchPosts();
      },
};
</script>

<style>

</style>
