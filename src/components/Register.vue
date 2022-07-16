<template>
  <div class="container mt-5 align-items-center">
    <div class="row mt-5 justify-content-center">
      <div class="col-sm-12 col-md-6">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title text-center">Sign Up</h3>
          </div>
          <div class="card-body">
            <form novalidate @submit.prevent="registerUser">
              <div class="form-group">
                <input
                  v-model= "name"
                  type="text"
                  :class="`form-control ${errors.name ? 'is-invalid' : '' }`"
                  placeholder="Name"
                />
                <em class="invalid-feedback">{{errors.name}}</em>
              </div>

              <div class="form-group">
                <input
                  v-model= "email"
                  type="email"
                  :class="`form-control ${errors.email ? 'is-invalid' : '' }`"
                  placeholder="Email"
                />
                <em class="invalid-feedback">{{errors.email}}</em>
              </div>

              <div class="form-group">
                <input
                  v-model= "password"
                  type="password"
                  :class="`form-control ${errors.password ? 'is-invalid' : '' }`"
                  placeholder="Password"
                />
                <em class="invalid-feedback">{{errors.password}}</em>
              </div>

              <div class="form-group">
                <input
                  v-model= "password2"
                  type="password"
                  :class="`form-control ${errors.password2 ? 'is-invalid' : '' }`"
                  placeholder="Password2"
                />
                <em class="invalid-feedback">{{errors.password2}}</em>
              </div>

              <div class="form-group">
                <button type="submit" class="btn form-control">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import validateRegister from '../validation/validateRegister.js';
export default {
    name: "RegisterComponent",
    data(){
        return {
            name:"",
            email:"",
            password:"",
            password2:"",
            errors:{},
        };
    },
    methods:{
    registerUser(){
        const {isInvalid, errors} = validateRegister({
            name:this.name,
            email:this.email,
            password:this.password,
            password2:this.password2,
        });

        if(isInvalid){
            this.errors = errors;
            console.log(errors);
        }
        else{
            console.log("Form Submiited");
        }
    },
}
}
</script>


<style scoped>
.form-control{
    margin-top:25px;
}
.btn{
    background-color:rgb(8, 105, 8);
    color:white;
    font-size: 20px;
    font-family: 'Nunito', sans-serif;
    border-radius: 0;
}
.card-title{
    font-family: 'Nunito', sans-serif;
    font-size: 30px;
}
</style>