
var c;
$('#btn').click(function(){
  $.getJSON('https://jsonplaceholder.typicode.com/posts?callback=?', function(posts){
  $.getJSON('https://jsonplaceholder.typicode.com/comments?callback=?', function(comments){
    c = comments;
    console.log(posts);
    console.log(comments);


    var postCount = 0;
    var list = '<ul>';

    for(var post in posts){ // loop through posts

      if(postCount == 10){
        break;
      }

      list += '<li>'+posts[post].title; 
      var commentCount = 0; // when its 
      
      // comments list
      var commentList = '<ul>';
      for(var comment in comments){
        if(commentCount === 3){
          break;
          commentList += '<input id="Show-comments" data-postId="'+posts[post].id+'">show more comments</input>';
        }
        
        if(posts[post].id === comments[comment].postId){
          commentList += '<li>'+comments[comment].body+'</li>';
          commentCount++;
        }
      }
      commentList += '</ul>';
      list += commentList;
      list += '</li>';

      postCount++;
    }

    list += '</ul>';

    $('#data').html(list);
    $('#btn').hide(); 
   $('#Show-comments').show();
   
  });


$('#Show-comments').click(function(){



  //loop through comments and get only the ones with this postId
  // create <li>comment</li>
  // hide this button and show list created
});
    
  })
}); 

 

  



  



