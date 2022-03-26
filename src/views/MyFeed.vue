<template>
  <div class="about">
    <h1>C'EST LE FEED</h1>
    <br>
    <ul id="example-1" class="text-blue">
      <li :key="'post-' + post.id" v-for="post in posts">
        <p>{{ post.content }}</p>
        <!-- <button @click="deletePost(post.id)">Delete</button> -->
        <br>
        <br>
      </li>
    </ul>

  </div>
</template>


<script>

import { mapState, mapActions } from "vuex";

export default{
computed: {
    ...mapState("user", ["user_data"]),
},
name: "feed",
data() {
  return{
  posts: [],
  };
},
created(){
    this.getAllPosts();
},
methods: {
  async deletePost(id){
    const { data, error } = await this.$supabase.from("posts").delete().match({ id: id});
    if (data){
      this.getAllPosts();
    } else {
      console.log(error);
    }
  },
  async getAllPosts(){
    const { data, error } = await this.$supabase.from("posts").select().match({author: this.user_data.email});
    if(data){
      this.posts = data;
    }else{
      console.log(error);
    }
  }
}
};
</script>
