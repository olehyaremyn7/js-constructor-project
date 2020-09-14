import './stylesheets/styles.css'
import {Site} from './classes/site'
import {model} from './javascript/model'
import {Sidebar} from './classes/sidebar'

const site = new Site('#site')

const updateCB = newBlock => {
    model.push(newBlock)
    site.render(model)
}

new Sidebar('#panel', updateCB)

site.render(model)
