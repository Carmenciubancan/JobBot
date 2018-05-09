
var c;
$('#show-posts').click(function(){
  $.getJSON('https://jsonplaceholder.typicode.com/posts?callback=?', function(posts){
  $.getJSON('https://jsonplaceholder.typicode.com/comments?callback=?', function(comments){
    c = comments;
    console.log(posts);
    console.log(comments);


    var postCount = 0;
    var list = '<ul>';

    for(var post in posts){ 
      if(postCount == 10){
        break;
      }

      list += '<li>'+posts[post].title; 
      var commentCount = 0;
      
      
      var commentList = '<ul>';
      for(var comment in comments){
        if(commentCount === 3){
          commentList += '<button class="show-comments" data-postid="'+posts[post].id+'">show more</button>';
          break;
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
    $('#show-posts').hide(); 
  });


  $(document).on('click', '.show-comments', function(){
// $('.show-comments').on('click',function(){
var self = $(this);
var postid = self.data('postid');
var countComments = c.length;

for(var i = 0; i < countComments; i++){
  if(postid === c[i].postId){
    self.parent().append('<li>'+c[i].body+'</li>');
  }
}

self.hide();

  //loop through comments and get only the ones with this postId
  // create <li>comment</li>
  // hide this button and show list created
});
    
  })
}); 

 

  



  



