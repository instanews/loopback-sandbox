module.exports = function(Comment) {
  Comment.observe('after delete', function(ctx, next) {
    if(ctx.instance) {
      console.log('SHOULD ONLY RUN AFTER SUCCESSFUL REMOVAL OF INSTANCE!');
    }
    next();
  });
};
