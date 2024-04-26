export default function toggleDropdown() {
    let dropwdownDesc = document.querySelector('.dropdown-desc');
    dropwdownDesc.classList.toggle('is-open');
    console.log(dropwdownDesc);
}