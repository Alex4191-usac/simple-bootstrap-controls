
	$('.carousel').carousel({
        interval: 1000
    });
    $(function(){
        $("[data-toggle='tooltip']").tooltip()
    });
    
    $('#exampleModal').on('show.bs.modal', function (e) {
        $("#btn_sus").removeClass("btn-danger").addClass("btn-primary")
        $("#btn_sus").prop('disabled', true);
        
        console.log('SE HA MOSTRO');

    });
    $('#exampleModal').on('shown.bs.modal', function (e) {
        console.log('SE HA MOSTRADO');
    });
    $('#exampleModal').on('hide.bs.modal', function (e) {
        console.log('SE OCULTO');
    });
    $('#exampleModal').on('hidden.bs.modal', function (e) {
        console.log('SE HA OCULTADO');
        $("#btn_sus").removeClass("btn-primary").addClass("btn-danger");
        $("#btn_sus").prop('disabled', false);
    });	