import '../assets/styles/footer.styl'

export default{
  data(){
    return{
      author: 'Yosef'
    }
  },
  render(){
    return (
      <div id="footer">
        <span>Rewritten by {this.author}</span>
      </div>
    )
  }
}