import BlockBase from '../Base.js'

class JoinerBase extends BlockBase {
  initialize() {
    this.type = BlockBase.TYPES.JOINER
  }
}

class Is extends JoinerBase {}

export default {Is}