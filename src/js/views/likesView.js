import { elements } from "./base";
import { limitRecipeTitle } from "./searchView";

/*
<button class="recipe__love">
    <svg class="header__likes">
        <use href="img/icons.svg#icon-heart-outlined"></use>
    </svg>
</button>
*/
export const toggleLikeBtn = isLiked => {
  const iconString = isLiked ? "icon-heart" : "icon-heart-outlined";
  document
    .querySelector(".recipe__love use")
    .setAttribute("href", `img/icons.svg#${iconString}`);
};

export const toggleLikeMenu = numLikes => {
  elements.likesMenu.style.visibility = numLikes > 0 ? "visible" : "hidden";
};

export const renderLike = like => {
  const markup = `
    <li>
        <a class="likes__link" href="#http://www.edamam.com/ontologies/edamam.owl#recipe_${
          like.id
        }">
            <figure class="likes__fig">
                <img src="${like.img}" alt="${like.title}">
            </figure>
            <div class="likes__data">
                <h4 class="likes__name">${limitRecipeTitle(like.title)}</h4>
                <p class="likes__author">${like.author}</p>
            </div>
        </a>
    </li>
    `;
  elements.likesList.insertAdjacentHTML("beforeend", markup);
};

/*like in the highlightSelected of searchView, we selected by class name with href :
document
.querySelector(
    `.results__link[href="#http://www.edamam.com/ontologies/edamam.owl#recipe_${id}"]`
  )
  .classList.add("results__link--active");
*/

export const deleteLike = id => {
  const el = document.querySelector(
    `.likes__link[href="#http://www.edamam.com/ontologies/edamam.owl#recipe_${id}"]`
  ).parentElement;
  if (el) el.parentElement.removeChild(el);
};
