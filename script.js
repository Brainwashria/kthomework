Vue.component('active-buttons', {
    template: `
<div class="actionsContainer">
    <div class="likes">
        <button class="likeButton"></button>
    </div>
    <div class="actions">
        <button class="bookmark"></button>
        <button class="sendButton"></button>
    </div>
</div>`
});

new Vue({
    el: '#app'
});