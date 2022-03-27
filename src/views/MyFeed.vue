<template>
  <div class="about">
    <h1>C'EST MON FEED</h1>
    <br>

    <div>
      <label for="content">Contenu : </label>
      <input type="text" v-model="content" name="content" id="content">
      <button @click="createPost()" type="submit">BOUM</button>
    </div>

    <br><br>

    <ul id="example-1" class="text-blue">
      <li :key="'post-' + post.id" v-for="post in posts">
        <p>{{ post.content }}</p>
        <button @click="deletePost(post.id)">Delete</button>
        <button @click="goToPost(post.id)">Update</button>
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
  content: "",
  };
},
created(){
    this.getAllPosts();
},
methods: {
  goTo(name){
      this.$router.push({name: name})
  },
  goToPost(post) {
    this.$router.push({
      name: 'post',
      params: {
        id: post,
      },
    });
  },
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
  },
  async createPost() {
    const { data, error } = await this.$supabase.from('posts').insert([{ content: this.content, author: this.user_data.email }]);
    if(error) {
      console.log(error);
    } else if (data) {
        this.goTo("myfeed");
    }
  }
}
};
</script>
