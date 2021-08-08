import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from '@/components/table/table.template'
import {$} from '../../core/dom';

export class Table extends ExcelComponent {
    static className = 'excel__table'

    constructor($root) {
      super($root, {
        name: 'Table',
        listeners: ['mousedown']
      })
    }


    toHTML() {
      return createTable(20)
    }

    // onClick(event) {
    //   console.log(event)
    // }
    //
    onMousedown(event) {
      const resize = event.target.dataset.resize
      if (resize) {
        const $resizer = $(event.target)
        const $parent = $resizer.closest('[data-type="resizable"]')
        const coords = $parent.getCoords()

        document.onmousemove = (e) => {
          const delta = e.pageX - coords.right
          const value = coords.width + delta
          $parent.$el.style.width = value + 'px'
        }
        document.onmouseup = () => {
          document.onmousemove = null
        }
      }
    }
  //
  // onMousemove(event) {
  //   console.log(event)
  // }
  //
  // onMouseup(event) {
  //   console.log(event)
  // }
}
