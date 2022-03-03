/// <reference types= "cypress"/>

class categoryWomenPage {

    categorySelector(){
            cy.get('#layered_category_4').check()

            cy.get('#layered_category_8').check()
    }

    sizeSelector(){
            cy.get('#layered_id_attribute_group_1').check()

            cy.get('#layered_id_attribute_group_2').check()

            cy.get('#layered_id_attribute_group_3').check()
    }

    colorSelector(){
            cy.get('#layered_id_attribute_group_7').click()

            cy.get('#layered_id_attribute_group_8').click()
 
            cy.get('#layered_id_attribute_group_11').click()

            cy.get('#layered_id_attribute_group_13').click()

            cy.get('#layered_id_attribute_group_14').click()

            cy.get('#layered_id_attribute_group_15').click()

            cy.get('#layered_id_attribute_group_16').click()

            cy.get('#layered_id_attribute_group_24').click()
    }
    
    styleSelector(){
        cy.get('#layered_id_feature_11').check()

        cy.get('#layered_id_feature_16').check()

        cy.get('#layered_id_feature_13').check()
    }

    compositionSelector(){
        cy.get('#layered_id_feature_5').check()

        cy.get('#layered_id_feature_1').check()

        cy.get('#layered_id_feature_3').check()
    }

    propertiesSelector(){
        cy.get('#layered_id_feature_18').check()

        cy.get('#layered_id_feature_21').check()

        cy.get('#layered_id_feature_20').check()

        cy.get('#layered_id_feature_19').check()

        cy.get('#layered_id_feature_17').check()
    }

    availabilitySelector(){
        cy.get('#layered_quantity_1').check()
    }

    manufacturerSelector(){
        cy.get('#layered_manufacturer_1').check()
    }

    conditionSelector(){
        cy.get('#layered_condition_new').check()
    }

    priceSelector(){
        cy.get('.ui-slider-range').invoke("attr", "style", "left: 52%; width: 79%;")
    }

    sortSelector(){
        cy.get('#selectProductSort').select('Price: Lowest first')
    }

    addFewWomenClothes(){
        cy.get(':nth-child(1) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
        cy.get('.continue > span').click()
        cy.get(':nth-child(2) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
        cy.get('.continue > span').click()
        cy.get('.last-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
        cy.get('.continue > span').click()
    }
}    
export default categoryWomenPage