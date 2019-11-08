
var console = require('console');
var mealjson = require('./data/meals.js');

module.exports.function = function searchMeals (age, foods, recipeKey) {
  
  var age_month, mealAgeKey, food_names, each_recipe, prep_info = "";
  
  var recipes_list = [];

  // 1. 레시피
  if(recipeKey) {
    // 레시피 물어보기
    if (typeof(recipeKey) != 'undefined') {

      var nospace_foods = replaceAll(foods, " ", "");
      each_recipe = mealjson["Recipes"][nospace_foods][0];
      var recipe_img=mealjson["Recipes"][nospace_foods][1];
      
      //console.log(nospace_foods);

      if(each_recipe.trim != "") {
        prep_info = each_recipe.split("|")[0]; //재료
        //steps = replaceAll(each_recipe.split("|")[1], "$", "\n");    // new line 으로 만듬
        var steps = each_recipe.split("|")[1].split("$");

        steps.forEach(function(element) {
          recipes_list.push(element);
          console.log(element);
        });

      } else {
        throw Error("검색하신 음식에 대한 레시피 정보가 없습니다.");
      }
    }

    // 1. 레시피 정보 리턴
    return {
      meal_type : foods,
      meal_img : recipe_img,
      prep_info : prep_info,
      recipeSteps : {
        recipeSteps : recipes_list
      }
    }

  } else {
    if (!age) {
      throw Error("아기의 개월수를 말해주세요.");

    } else {
    
      // 2. 개월수별 먹을수있는 음식 정보
      if (typeof(age) != 'undefined' && typeof(foods) != 'undefined') {
        age_month = age.slice(0, -2); //마지막 두글자 '개월' 자르기
      }

      if (age_month < 5) {
        throw Error("이유식을 먹으려면 아기는 5개월 이상이 되어야 합니다.");

      } else {

        // ["5,6", "7,8", "9,10,11", "12,13,14,15"] ..
        const age_keys = Object.keys(mealjson["Age"]);

        // 해당 키만 찾
        for (let i=0; i < age_keys.length; i++) {
          if (age_keys[i].includes(age_month)) {
              mealAgeKey = age_keys[i];
              break
          }
        }

       
        if(foods.trim() == "이유식") {
          food_names = mealjson["Age"][mealAgeKey]["Foods"].split(',');
          var foodslist=food_names;
          new_name=[]
          var temp=''
          for (var k=0; k<food_names.length;k++){
            temp=food_names[k].replace(" ","");
            new_name.push(temp.replace(' ',''));
          }
          imgs=[];
          console.log(new_name);
          for (var k=0; k<new_name.length;k++ ){
            var a=mealjson["Recipes"][new_name[k]];
            // console.log(a['1']);
            imgs.push(a["1"]);              
          }
          // imgs=imgs[];
          // meal_img=imgs.split(",");
          // var foodslist=food_names.split(",");
          // 2.이유식 정보 리턴
          return {
            age : age,
            meal_type : foodslist,
            meal_img : imgs
          }

        // 3. 특정음식
        } else {

          var imPossDict = mealjson["Age"][mealAgeKey]["NoEat"];
          var possDict = mealjson["Age"][mealAgeKey]["YesEat"];
          
          var imgs=mealjson["Age"][mealAgeKey]["img"];
          var imgs_list=imgs.split(",");
          
          var canEat = "먹을 수 없어요";
          var imPossFoodList = [];
          var possFoodList = [];


          // each key set
          var imPossTypeList = Object.keys(imPossDict);
          var possTypeList = Object.keys(possDict);

          // put each values in the list
          imPossTypeList.forEach(function(element) {
              imPossFoodList.push(imPossDict[element]);
          });

          possTypeList.forEach(function(element) {
            // for (var i=0;i<possTypeList.length; i++){
              possFoodList.push(possDict[element]);
          });
         
          // find the keyword from list of foods
          imPossFoodList.forEach(function(element) {
            if (element.includes(foods)) {
              canEat = "먹을 수 없어요";
            }
          });


          possFoodList.forEach(function(element) {
            if (element.includes(foods)) {
              canEat = "먹을 수 있어요";
            }
          });               
          // 아기의 개월수에 따라 먹을수 있는 음식 없는 음식을 찾아서 리턴
          return {  
            age : age,
            this_yes_no : canEat,
            meal_type : foods,
            meal_img : imgs_list,
            possibleEats : {
              yes_no : "먹을 수 있어요",
              food_type : possTypeList, 
              food_list : possFoodList
            },
            impossibleEats : {
              yes_no : "먹을 수 없어요",
              food_type : imPossTypeList,
              food_list : imPossFoodList
            }

          }
        
        }
        
      }
    }
  
  }

}


// helper method for replaceAll
function replaceAll(str, searchStr, replaceStr) {
  return str.split(searchStr).join(replaceStr);
}
