# from https://github.com/code-chimp/dev-container-svelte3/blob/main/.devcontainer/Dockerfile
FROM ubuntu:22.04

# Configure apt
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update \
    && apt-get -y install --no-install-recommends apt-utils 2>&1

# Verify git and process tools are installed
RUN apt-get install -y git procps

# Install Node.js
RUN apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_22.x -o nodesource_setup.sh && \
    bash nodesource_setup.sh && \
    apt-get install -y nodejs && \
    node -v

# # Remove outdated yarn from /opt and install via package
# # so it can be easily updated via apt-get upgrade yarn
# RUN rm -rf /opt/yarn-* \
#     && rm -f /usr/local/bin/yarn \
#     && rm -f /usr/local/bin/yarnpkg \
#     && apt-get install -y curl apt-transport-https lsb-release \
#     && curl -sS https://dl.yarnpkg.com/$(lsb_release -is | tr '[:upper:]' '[:lower:]')/pubkey.gpg | apt-key add - 2>/dev/null \
#     && echo "deb https://dl.yarnpkg.com/$(lsb_release -is | tr '[:upper:]' '[:lower:]')/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
#     && apt-get update \
#     && apt-get -y install --no-install-recommends yarn

# Install eslint
RUN npm install -g eslint

# bash theme
RUN bash -c "$(curl -fsSL https://raw.githubusercontent.com/ohmybash/oh-my-bash/master/tools/install.sh)"
RUN sed -i 's/OSH_THEME="font"/OSH_THEME="powerline"/g' ~/.bashrc

# Clean up
RUN apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*
ENV DEBIAN_FRONTEND=dialog

# Set the default shell to bash rather than sh
ENV SHELL /bin/bash
