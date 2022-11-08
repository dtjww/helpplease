<template>
    <div class="row img-overlay img-wrapper"> 
        <div class="column">
            <img class="image" src="https://images.unsplash.com/photo-1605826832916-d0ea9d6fe71e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80" style="width:100%"/>
            <img class="image" src="https://images.unsplash.com/photo-1628435600697-6a954dea5055?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" style="width:100%"/>
            <img class="image" src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80" style="width:100%"/>
            <img class="image" src="https://images.unsplash.com/photo-1576613109753-27804de2cba8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" style="width:100%"/>
        </div>
        
        <div class="column">
            <img class="image" src="https://images.unsplash.com/photo-1558975285-193b2c315c2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" style="width:100%"/>
            <img class="image" src="https://images.unsplash.com/photo-1630432328419-bee5f50d6390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80" style="width:100%"/>
            <img class="image" src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" style="width:100%"/>
        </div> 
        
        <div class="column">
            <img class="image" src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2059&q=80" style="width:100%"/>
            <img class="image" src="https://images.unsplash.com/photo-1582902281043-69c645f40cd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" style="width:100%"/>
            <img class="image" src="https://images.unsplash.com/photo-1623348282113-50395974159c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" style="width:100%"/>
        </div>
        
        <div class="column">
            <img class="image" src="https://images.unsplash.com/photo-1516386408840-d718a820a05c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" style="width:100%"/>
            <img class="image" src="https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" style="width:100%"/>
            <img class="image" src="https://images.unsplash.com/photo-1504222490345-c075b6008014?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" style="width:100%"/>
            
        </div>
    </div>
</template>

<style>
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: Arial;
    }

    .header {
        text-align: center;
        padding: 32px;
    }

    .row {
        display: flex;
        flex-wrap: wrap;
        padding: 0 4px;
    }

    /* Create four equal columns that sits next to each other */
    .column {
        flex: 25%;
        max-width: 25%;
        padding-left: 5px;
        padding-right: 5px;
        /* max-height: 100vh; */
    }

    .column img {
        margin-top: 8px;
        vertical-align: middle;
    }

    .image {
        padding-bottom: 5px;
        border-radius: 15px;
        opacity: 0.8;
    }

    .img-wrapper {
        position: relative;
        width: 100%;
        font-size: 0;
    }

    .img-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.86);
    }


    /* Responsive layout - makes a two column-layout instead of four columns */
    @media (max-width: 800px) {
    .column {
        flex: 50%;
        max-width: 50%;
    }
    }

    /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
    @media (max-width: 600px) {
    .column {
        flex: 100%;
        max-width: 100%;
    }
    }
</style>