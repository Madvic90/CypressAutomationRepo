class ShopPage
{
CheckOutButton()
{
return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
}
CheckOutBasket()
{
return cy.get(':nth-child(4) > :nth-child(5) > .btn')
}
DeliveryCountryField()
{
   return cy.get('#country')
}
CheckBoxLabel()
{
return cy.get('.checkbox > label')
}
PurchaseButton()
{
return cy.get('input[type="submit"')
}
AlertSuccesPurchase()
{
return cy.get('.alert')
}
}
export default ShopPage;
