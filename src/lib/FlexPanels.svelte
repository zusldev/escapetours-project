<script>
    let panels = [
        {
            bgImg: "https://source.unsplash.com/gYl-UtwNg_I/1500x1500",
            text: "Panel 1 content",
        },
        {
            bgImg: "https://source.unsplash.com/rFKUFzjPYiQ/1500x1500",
            text: "Panel 2 content",
        },
        {
            bgImg: "https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d",
            text: "Panel 3 content",
        },
        {
            bgImg: "https://source.unsplash.com/ITjiVXcwVng/1500x1500",
            text: "Panel 4 content",
        },
        {
            bgImg: "https://source.unsplash.com/3MNzGlQM7qs/1500x1500",
            text: "Panel 5 content",
        },
    ];

    function togglePanel(panel) {
        panel.expanded = !panel.expanded;
    }
</script>

{#each panels as panel}
    <div
        class="panel {panel.expanded ? 'expanded' : ''}"
        on:click={() => togglePanel(panel)}
        on:keydown={(e) => {
            if (e.key === "Enter") {
                togglePanel(panel);
            }
        }}
    >
        <div class="panel-content" style="background-image: url({panel.bgImg})">
            {panel.expanded ? panel.text : ""}
        </div>
    </div>
{/each}

<style>
    .panel {
        height: auto;
        cursor: pointer;
    }

    .panel-content {
        height: 150px;
        background-size: cover;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 24px;
        transition: height 0.3s;
    }

    .panel.expanded .panel-content {
        height: 300px;
    }
</style>
